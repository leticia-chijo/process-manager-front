import { ClearButton, ErrorText, InputContainer, LabelText, StyledInput } from "./styled"

interface Props {
  value: string
  onChange: (v: string) => void
  label: string
  error?: string | null
  placeholder?: string
}

export default function Input({ value, onChange, label, error, placeholder }: Props) {
  return (
    <InputContainer>
      <LabelText $hasError={error !== null}>{label}</LabelText>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        $hasError={error !== null}
        placeholder={placeholder || ""}
      />
      {value && <ClearButton onClick={() => onChange("")}>×</ClearButton>}
      {error !== null && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}
