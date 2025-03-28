import { useRef } from "react"
import Tree from "react-d3-tree"
import { TreeContainer } from "./styled"
import CustomNode from "./CustomNode"
import { CustomNodeDatum, TreeNode } from "@/types/treeNode"
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/sizes"
import useTreeZoom from "@/hooks/useTreeZoom"

interface Props {
  treeData: TreeNode
  setDetailsId: (id: number) => void
}

export default function ProcessTree({ treeData, setDetailsId }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { zoom, translate } = useTreeZoom(treeData, containerRef, NODE_HEIGHT, NODE_WIDTH)

  const onClickNode = (nodeDatum: CustomNodeDatum) => {
    setDetailsId(nodeDatum.id)
  }

  return (
    <TreeContainer ref={containerRef}>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={translate}
        zoom={zoom}
        scaleExtent={{ min: 0.2, max: 3 }}
        pathFunc="diagonal"
        separation={{ siblings: 1.05, nonSiblings: 1.05 }}
        pathClassFunc={() => "custom-link"}
        renderCustomNodeElement={({ nodeDatum }) => (
          <CustomNode nodeDatum={nodeDatum as CustomNodeDatum} onClick={onClickNode} />
        )}
      />
    </TreeContainer>
  )
}
