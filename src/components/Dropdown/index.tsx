import { TreeNode } from "../../types/treeNode"
import { CustomSelect } from "./styled"

interface DropdownProps {
  treeData: TreeNode[]
  setSelectedProcess: (process: TreeNode) => void
}

export default function Dropdown({ treeData, setSelectedProcess }: DropdownProps) {
  const options = treeData.map((process) => ({
    value: process.name,
    label: process.name
  }))

  return (
    <CustomSelect
      placeholder="Selecione um processo..."
      options={options}
      onChange={(selectedOption: any) => {
        const process = treeData.find((p) => p.name === selectedOption?.value)
        if (process) setSelectedProcess(process)
      }}
    />
  )
}
