import { useEffect, useState } from "react"
import { convertToTree } from "../../utils/convertDataToTree"
import ProcessTree from "../../components/ProcessTree"
import { TreeNode } from "../../types/treeNode"
import { ScreenContainer, TreeSelectContainer } from "./styled"
import Dropdown from "@/components/Dropdown"
import ProcessDetails from "@/components/ProcessDetails"
import TreePlaceholder from "@/components/TreePlaceholder"
import { useGlobalState } from "@/hooks/useGlobalState"

export default function ProcessTreePage() {
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null)
  const [detailsId, setDetailsId] = useState<number>(0)
  const { processes, loading, error, selectedProcess, setSelectedProcess } = useGlobalState()

  useEffect(() => {
    if (processes) {
      const tree = convertToTree(processes)
      setTreeData(tree)
    }
  }, [processes])

  if (!treeData || loading) return <p>Carregando...</p>

  if (error) console.log(error)

  return (
    <ScreenContainer>
      <TreeSelectContainer>
        <Dropdown
          data={treeData}
          selected={selectedProcess}
          setSelected={setSelectedProcess}
          placeholder="Selecione um processo..."
        />
        {selectedProcess ? (
          <ProcessTree treeData={selectedProcess} setDetailsId={setDetailsId} />
        ) : (
          <TreePlaceholder />
        )}
      </TreeSelectContainer>
      {detailsId !== 0 && <ProcessDetails detailsId={detailsId} setDetailsId={setDetailsId} />}
    </ScreenContainer>
  )
}
