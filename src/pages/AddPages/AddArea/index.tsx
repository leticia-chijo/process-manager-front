import { useState } from "react"
import AddForm from "../AddForm"
import { FormInputs } from "../../../types/formInputs"
import { useRequest } from "../../../hooks/useRequest"
import { AreaBody } from "../../../types/area"
import { AreaService } from "../../../services/areaService"

const formInputs: FormInputs[] = [
  { id: 1, type: "input", name: "name", label: "Nome", placeholder: "Nome da Área" }
]

const formInit: any = {}

formInputs.forEach((input) => {
  formInit[input.name] = ""
})

export default function AddArea() {
  const [form, setForm] = useState<AreaBody>(formInit)
  const { executeRequest, loading } = useRequest<AreaBody>(() => AreaService.create(form))

  const submitForm = async () => {
    const res = await executeRequest()

    if (res) {
      alert("Área adicionada com sucesso!")
      setForm(formInit)
    } else {
      alert("Preencha os dados corretamente!")
    }
  }

  return (
    <AddForm<AreaBody>
      formInputs={formInputs}
      form={form}
      setForm={setForm}
      submitForm={submitForm}
      error={null}
      loading={loading}
    />
  )
}
