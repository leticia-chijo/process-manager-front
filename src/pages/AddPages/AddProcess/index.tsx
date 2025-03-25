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

export default function AddProcess() {
  const { setProcesses } = useGlobalState()
  const { data: teams, executeRequest: executeTeamReq } = useRequest<Team[]>(TeamService.getAll)
  const { data: docs, executeRequest: executeDocReq } = useRequest<Doc[]>(DocsService.getAll)
  const { data: tools, executeRequest: executeToolReq } = useRequest<Tool[]>(ToolService.getAll)
  const { executeRequest: executeProcessGet } = useRequest<Process[]>(ProcessService.getAllNested)
  const { executeRequest: executeProcessPost, loading } = useRequest<ProcessBody>(() =>
    ProcessService.create({
      ...form,
      priority: form.priority.id,
      teamId: form.teamId.id,
      docs: form.docs.length === 0 ? [] : form.docs.map((doc) => doc.id),
      tools:
        form.tools.length === 0 ? [] : form.tools.map((tool) => ({ id: tool.id, purpose: tool.purpose })),
      parentId: null
    })
  )

  useEffect(() => {
    executeTeamReq()
    executeDocReq()
    executeToolReq()
  }, [])

  const formInputs: FormInputs[] = [
    { id: 1, type: "input", name: "title", label: "Título", placeholder: "Nome do processo" },
    { id: 2, type: "dropdown", name: "teamId", label: "Time", placeholder: "Selecione um time", data: teams },
    {
      id: 3,
      type: "dropdown",
      name: "priority",
      label: "Prioridade",
      placeholder: "Selecione uma prioridade",
      data: priorityOptions
    },
    {
      id: 4,
      type: "dropdown",
      name: "docs",
      label: "Documentos",
      placeholder: "Selecione os documentos",
      data: docs,
      isMulti: true
    },
    {
      id: 5,
      type: "dropdown",
      name: "tools",
      label: "Ferramentas",
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

  const [form, setForm] = useState<ProcessFormData>({ ...formInit, manual: false })

  const submitForm = async () => {
    const res = await executeProcessPost()

    if (res) {
      alert("Processo adicionado com sucesso!")
      setForm(formInit)
      const res = await executeProcessGet()
      if (res !== null) setProcesses(res)
    } else {
      alert("Preencha os dados corretamente!")
    }
  }

  return (
    <AddForm<ProcessFormData>
      formInputs={formInputs}
      form={form}
      setForm={setForm}
      submitForm={submitForm}
      error={null}
      loading={loading}
      hasTools={true}
    />
  )
}
