import { useEffect, useState } from "react"
import AddForm from "../AddForm"
import { useRequest } from "@/hooks/useRequest"
import { Area } from "@/types/area"
import { FormInputs } from "@/types/formInputs"
import { TeamBody, TeamFormData } from "@/types/team"
import { TeamService } from "@/services/teamService"
import { AreaService } from "@/services/areaService"
import Modal from "@/components/Modal"

export default function AddTeam() {
  const [isModalOpen, setModalOpen] = useState(false)
  const {
    executeRequest: executeTeamReq,
    loading,
    error
  } = useRequest<TeamBody>(() => TeamService.create({ ...form, areaId: form.areaId.id }))
  const { data: areas, executeRequest: executeAreaReq } = useRequest<Area[]>(() => AreaService.getAll())

  useEffect(() => {
    executeAreaReq()
  }, [])

  const formInputs: FormInputs[] = [
    { id: 1, type: "input", name: "name", label: "Nome", placeholder: "Nome do time" },
    { id: 2, type: "dropdown", name: "areaId", label: "Área", placeholder: "Selecione uma área", data: areas }
  ]

  const formInit: any = {}

  formInputs.forEach((input) => {
    formInit[input.name] = ""
  })

  const [form, setForm] = useState<TeamFormData>(formInit)

  const submitForm = async () => {
    const res = await executeTeamReq()

    if (res) {
      alert("Time adicionado com sucesso!")
      setForm(formInit)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <AddForm<TeamFormData>
        formInputs={formInputs}
        form={form}
        setForm={setForm}
        submitForm={submitForm}
        loading={loading}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        message={error || "Preencha os dados corretamente!"}
      />
    </>
  )
}
