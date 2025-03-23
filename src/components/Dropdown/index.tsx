import { TreeNode } from "../../types/treeNode"
import { CustomSelect } from "./styled"

interface Props {
  treeData: TreeNode[]
  setSelectedProcess: (process: TreeNode) => void
}

export default function Dropdown({ treeData, setSelectedProcess }: Props) {
  const options = treeData.map((process) => ({
    value: process.id,
    label: process.name
  }))

  return (
    <CustomSelect
      placeholder="Selecione um processo..."
      options={options}
      onChange={(selectedOption: any) => {
        const process = treeData.find((p) => p.id === selectedOption?.value)
        if (process) setSelectedProcess(process)
      }}
    />
  )
}
