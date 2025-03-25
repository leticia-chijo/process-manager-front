import { useEffect, useState } from "react"
import AddForm from "../AddForm"
import { priorityOptions } from "@/constants/priorityOptions"
import { useGlobalState } from "@/hooks/useGlobalState"
import { useRequest } from "@/hooks/useRequest"
import { Doc } from "@/types/doc"
import { FormInputs } from "@/types/formInputs"
import { Process, ProcessBody, ProcessFormData } from "@/types/process"
import { Team } from "@/types/team"
import { Tool } from "@/types/tool"
import { DocsService } from "@/services/docService"
import { ProcessService } from "@/services/processService"
import { TeamService } from "@/services/teamService"
import { ToolService } from "@/services/toolService"
import Modal from "@/components/Modal"

export default function AddSubProcess() {
  const [isModalOpen, setModalOpen] = useState(false)
  const { setProcesses } = useGlobalState()
  const { data: teams, executeRequest: executeTeamReq } = useRequest<Team[]>(TeamService.getAll)
  const { data: docs, executeRequest: executeDocReq } = useRequest<Doc[]>(DocsService.getAll)
  const { data: tools, executeRequest: executeToolReq } = useRequest<Tool[]>(ToolService.getAll)
  const { data: processes, executeRequest: executeProcessGetList } = useRequest<Process[]>(
    ProcessService.getAll
  )
  const { executeRequest: executeProcessGetTree } = useRequest<Process[]>(ProcessService.getAllNested)
  const {
    executeRequest: executeProcessPost,
    loading,
    error
  } = useRequest<ProcessBody>(() =>
    ProcessService.create({
      ...form,
      priority: form.priority.id,
      teamId: form.teamId.id,
      docs: form.docs.length === 0 ? [] : form.docs.map((doc) => doc.id),
      tools:
        form.tools.length === 0 ? [] : form.tools.map((tool) => ({ id: tool.id, purpose: tool.purpose })),
      parentId: form.parentId?.id || null
    })
  )

  useEffect(() => {
    executeTeamReq()
    executeDocReq()
    executeToolReq()
    executeProcessGetList()
  }, [])

  const formInputs: FormInputs[] = [
    { id: 1, type: "input", name: "title", label: "Título", placeholder: "Nome do processo" },
    {
      id: 2,
      type: "dropdown",
      name: "parentId",
      label: "Processo pai",
      placeholder: "Selecione um processo existente",
      data: processes
    },
    { id: 3, type: "dropdown", name: "teamId", label: "Time", placeholder: "Selecione um time", data: teams },
    {
      id: 4,
      type: "dropdown",
      name: "priority",
      label: "Prioridade",
      placeholder: "Selecione uma prioridade",
      data: priorityOptions
    },
    {
      id: 5,
      type: "dropdown",
      name: "docs",
      label: "Documentos (opcional)",
      placeholder: "Selecione os documentos",
      data: docs,
      isMulti: true
    },
    {
      id: 6,
      type: "dropdown",
      name: "tools",
      label: "Ferramentas (opcional)",
      placeholder: "Selecione as ferramentas",
      data: tools,
      isMulti: true
    }
  ]

  const formInit: any = {}

  formInputs.forEach((input) => {
    formInit[input.name] = ""
  })
  formInit.docs = []
  formInit.tools = []

  const [form, setForm] = useState<ProcessFormData>({ ...formInit, parentId: null })

  const submitForm = async () => {
    const res = await executeProcessPost()

    if (res) {
      alert("Sub-processo adicionado com sucesso!")
      setForm(formInit)
      const getRes = await executeProcessGetTree()
      if (getRes !== null) setProcesses(getRes)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <AddForm<ProcessFormData>
        formInputs={formInputs}
        form={form}
        setForm={setForm}
        submitForm={submitForm}
        loading={loading}
        hasTools={true}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        message={error || "Preencha os dados corretamente!"}
      />
    </>
  )
}
