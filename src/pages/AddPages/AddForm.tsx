import { FormContainer, SubmitButton } from "./styled"
import Dropdown from "@/components/Dropdown"
import Input from "@/components/Input"
import { FormInputs } from "@/types/formInputs"
import { Tool } from "@/types/tool"

interface Props<T extends Record<string, any>> {
  formInputs: FormInputs[]
  form: T
  setForm: (form: T) => void
  submitForm: () => void
  error?: string | null
  loading?: boolean
  hasTools?: boolean
}

export default function AddForm<T extends Record<string, any>>({
  formInputs,
  form,
  setForm,
  submitForm,
  error,
  loading,
  hasTools
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
              isMulti={input.isMulti}
            />
          )
        } else {
          return null
        }
      })}
      {hasTools &&
        form.tools.map((tool: Tool) => (
          <Input
            key={`tool${tool.id}`}
            label={`Para que a ferramenta ${tool.name} será usada?`}
            onChange={(text) =>
              setForm({
                ...form,
                tools: form.tools.map((t: Tool) => (t.id === tool.id ? { ...t, purpose: text } : t))
              })
            }
            value={tool.purpose}
            error={null}
          />
        ))}
      <SubmitButton onClick={submitForm} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </SubmitButton>
    </FormContainer>
  )
}
