import { CustomSelect, LabelText } from "./styled"

interface BaseItem {
  id: number
  name: string
}

interface Props<T> {
  data: T[]
  selected: T | null
  setSelected: (item: T | null) => void
  placeholder?: string
  label?: string
}

export default function Dropdown<T extends BaseItem>({
  data,
  selected,
  setSelected,
  placeholder,
  label
}: Props<T>) {
  const options = data.map((item) => ({
    value: item.id,
    label: item.name
  }))

  const selectedOption = selected ? options.find((opt) => opt.value === selected.id) : null

  return (
    <>
      {label && <LabelText>{label}</LabelText>}
      <CustomSelect
        placeholder={placeholder || ""}
        options={options}
        value={selectedOption}
        onChange={(selected: any) => {
          const item = data.find((i) => i.id === selected?.value)
          if (item) setSelected(item)
        }}
      />
    </>
  )
}
