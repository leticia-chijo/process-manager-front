import { useState } from "react"
import AddForm from "../AddForm"
import { useRequest } from "@/hooks/useRequest"
import { DocBody } from "@/types/doc"
import { FormInputs } from "@/types/formInputs"
import { DocsService } from "@/services/docService"
import Modal from "@/components/Modal"

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
  const [isModalOpen, setModalOpen] = useState(false)
  const { executeRequest, loading, error } = useRequest<DocBody>(() => DocsService.create(form))

  const submitForm = async () => {
    const res = await executeRequest()

    if (res) {
      alert("Documento adicionado com sucesso!")
      setForm(formInit)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <AddForm<DocBody>
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
