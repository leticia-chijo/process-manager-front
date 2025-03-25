import { CustomSelect, LabelText, SelectContainer } from "./styled"

interface BaseItem {
  id: number
  name: string
  title?: string
}

interface Props<T> {
  data: T[]
  selected: T | T[] | null
  setSelected: (item: T | T[] | null) => void
  placeholder?: string
  label?: string
  isMulti?: boolean
}

export default function Dropdown<T extends BaseItem>({
  data,
  selected,
  setSelected,
  placeholder,
  label,
  isMulti
}: Props<T>) {
  const options = data
    .map((item) => ({
      value: item.id,
      label: item.name || item.title as string
    }))
    .sort((a, b) => a.label.localeCompare(b.label))

  let selectedOption = null

  if (isMulti) {
    if (Array.isArray(selected)) {
      selectedOption = options.filter((opt) => selected.some((s) => s.id === opt.value))
    }
  } else {
    if (selected) {
      selectedOption = options.find((opt) => opt.value === (selected as T).id) || null
    }
  }

  const onChange = (selected: any) => {
    if (isMulti) {
      const items = selected ? selected.map((s: any) => data.find((i) => i.id === s.value)) : []
      setSelected(items as T[])
    } else {
      const item = data.find((i) => i.id === selected?.value) || null
      setSelected(item)
    }
  }

  return (
    <SelectContainer>
      {label && <LabelText>{label}</LabelText>}
      <CustomSelect
        placeholder={placeholder || ""}
        options={options}
        value={selectedOption}
        onChange={onChange}
        isMulti={isMulti}
      />
    </SelectContainer>
  )
}
