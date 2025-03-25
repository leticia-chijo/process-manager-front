import { useState } from "react"
import AddForm from "../AddForm"
import { useRequest } from "@/hooks/useRequest"
import { FormInputs } from "@/types/formInputs"
import { ToolBody } from "@/types/tool"
import { ToolService } from "@/services/toolService"
import Modal from "@/components/Modal"

const formInputs: FormInputs[] = [
  { id: 1, type: "input", name: "name", label: "Nome", placeholder: "Nome da ferramenta" },
  { id: 2, type: "input", name: "link", label: "Link", placeholder: "Link da ferramenta" },
  {
    id: 3,
    type: "input",
    name: "image",
    label: "Imagem",
    placeholder: "Link para uma imagem do logo da ferramenta"
  }
]

const formInit: any = {}

formInputs.forEach((input) => {
  formInit[input.name] = ""
})

export default function AddTool() {
  const [form, setForm] = useState<ToolBody>(formInit)
  const [isModalOpen, setModalOpen] = useState(false)
  const { executeRequest, loading, error } = useRequest<ToolBody>(() => ToolService.create(form))

  const submitForm = async () => {
    const res = await executeRequest()

    if (res) {
      alert("Ferramenta adicionado com sucesso!")
      setForm(formInit)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <AddForm<ToolBody>
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
