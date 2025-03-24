export interface FormInputs {
  id: number
  type: "input" | "dropdown"
  name: string
  label?: string
  placeholder?: string
  data?: any[]
}
