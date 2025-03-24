import Dropdown from "../../components/Dropdown"
import Input from "../../components/Input"
import { FormInputs } from "../../types/formInputs"
import { FormContainer, SubmitButton } from "./styled"

interface Props<T extends Record<string, any>> {
  formInputs: FormInputs[]
  form: T
  setForm: (form: T) => void
  submitForm: () => void
  error?: string | null
  loading?: boolean
}

export default function AddForm<T extends Record<string, any>>({
  formInputs,
  form,
  setForm,
  submitForm,
  error,
  loading
}: Props<T>) {
  return (
    <FormContainer>
      {formInputs.map((input) => {
        const fieldName = input.name as keyof T

        if (input.type === "input") {
          return (
            <Input
              key={input.id}
              value={form[fieldName]}
              onChange={(text) => setForm({ ...form, [fieldName]: text })}
              label={input.label || ""}
              placeholder={input.placeholder}
              error={error}
            />
          )
        } else if (input.type === "dropdown") {
          return (
            <Dropdown
              key={input.id}
              label={input.label}
              data={input.data || []}
              placeholder={input.placeholder}
              selected={form[fieldName]}
              setSelected={(text) => setForm({ ...form, [fieldName]: text })}
            />
          )
        } else {
          return null
        }
      })}
      <SubmitButton onClick={submitForm} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </SubmitButton>
    </FormContainer>
  )
}
