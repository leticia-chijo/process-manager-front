import { useState } from "react"
import AddForm from "../AddForm"
import { FormInputs } from "../../../types/formInputs"
import { useRequest } from "../../../hooks/useRequest"
import { DocBody } from "../../../types/doc"
import { DocsService } from "../../../services/docService"

const formInputs: FormInputs[] = [
  { id: 1, type: "input", name: "name", label: "Nome", placeholder: "Nome do documento" },
  { id: 2, type: "input", name: "link", label: "Link", placeholder: "Link do documento" }
]

const formInit: any = {}

formInputs.forEach((input) => {
  formInit[input.name] = ""
})

export default function AddDoc() {
  const [form, setForm] = useState<DocBody>(formInit)
  const { executeRequest, loading } = useRequest<DocBody>(() => DocsService.create(form))

  const submitForm = async () => {
    const res = await executeRequest()

    if (res) {
      alert("Documento adicionado com sucesso!")
      setForm(formInit)
    } else {
      alert("Preencha os dados corretamente!")
    }
  }

  return (
    <AddForm<DocBody>
      formInputs={formInputs}
      form={form}
      setForm={setForm}
      submitForm={submitForm}
      error={null}
      loading={loading}
    />
  )
}
