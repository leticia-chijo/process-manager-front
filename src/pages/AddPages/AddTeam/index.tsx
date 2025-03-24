import { useEffect, useState } from "react"
import { FormInputs } from "../../../types/formInputs"
import { useRequest } from "../../../hooks/useRequest"
import { TeamBody, TeamFormData } from "../../../types/team"
import { TeamService } from "../../../services/teamService"
import { AreaService } from "../../../services/areaService"
import { Area } from "../../../types/area"
import AddForm from "../AddForm"

export default function AddTeam() {
  const { executeRequest: executeTeamReq, loading } = useRequest<TeamBody>(() =>
    TeamService.create({ ...form, areaId: form.areaId.id })
  )
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
      alert("Preencha os dados corretamente!")
    }
  }

  return (
    <AddForm<TeamFormData>
      formInputs={formInputs}
      form={form}
      setForm={setForm}
      submitForm={submitForm}
      error={null}
      loading={loading}
    />
  )
}
