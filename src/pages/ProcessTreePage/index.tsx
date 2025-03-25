import { useEffect, useState } from "react"
import { convertToTree } from "../../utils/convertDataToTree"
import ProcessTree from "../../components/ProcessTree"
import { TreeNode } from "../../types/treeNode"
import { ScreenContainer, TreeSelectContainer } from "./styled"
import Dropdown from "@/components/Dropdown"
import ProcessDetails from "@/components/ProcessDetails"
import TreePlaceholder from "@/components/TreePlaceholder"
import { useGlobalState } from "@/hooks/useGlobalState"
import { colors } from "@/constants/colors"
import { Oval } from "react-loader-spinner"

export default function ProcessTreePage() {
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null)
  const [detailsId, setDetailsId] = useState<number>(0)
  const { processes, loading, selectedProcess, setSelectedProcess } = useGlobalState()

  useEffect(() => {
    if (processes) {
      const tree = convertToTree(processes)
      setTreeData(tree)
    }
  }, [processes])

  if (!treeData || loading) {
    return (
      <ScreenContainer>
        <Oval
          height="80"
          width="80"
          strokeWidth={4}
          color={colors.secondary}
          secondaryColor={colors.primaryLight}
        />
      </ScreenContainer>
    )
  }

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
