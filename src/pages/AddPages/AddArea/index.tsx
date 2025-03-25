import { useState } from "react"
import AddForm from "../AddForm"
import { useRequest } from "@/hooks/useRequest"
import { AreaBody } from "@/types/area"
import { FormInputs } from "@/types/formInputs"
import { AreaService } from "@/services/areaService"
import Modal from "@/components/Modal"

const formInputs: FormInputs[] = [
  { id: 1, type: "input", name: "name", label: "Nome", placeholder: "Nome da área" }
]

const formInit: any = {}

formInputs.forEach((input) => {
  formInit[input.name] = ""
})

export default function AddArea() {
  const [form, setForm] = useState<AreaBody>(formInit)
  const [isModalOpen, setModalOpen] = useState(false)
  const { executeRequest, loading, error } = useRequest<AreaBody>(() => AreaService.create(form))

  const submitForm = async () => {
    const res = await executeRequest()

    if (res) {
      alert("Área adicionada com sucesso!")
      setForm(formInit)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <AddForm<AreaBody>
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
