import { useGlobalState } from "../../hooks/useGlobalState"
import { TreeNode } from "../../types/treeNode"
import { CustomSelect } from "./styled"

interface Props {
  treeData: TreeNode[]
}

export default function Dropdown({ treeData }: Props) {
  const { selectedProcess, setSelectedProcess } = useGlobalState()

  const options = treeData.map((process) => ({
    value: process.id,
    label: process.name
  }))

  const selectedOption = selectedProcess
    ? options.find((option) => option.value === selectedProcess.id)
    : null

  return (
    <CustomSelect
      placeholder="Selecione um processo..."
      options={options}
      value={selectedOption}
      onChange={(selectedOption: any) => {
        const process = treeData.find((p) => p.id === selectedOption?.value)
        if (process) setSelectedProcess(process)
      }}
    />
  )
}
