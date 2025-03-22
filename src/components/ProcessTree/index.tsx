import Tree, { TreeNodeDatum } from "react-d3-tree"
import { TreeNode } from "../../types/treeNode"
import { Container, NodeGroup, NodeRect, NodeText } from "./styled"
import { useRef } from "react"
import useTreeZoom from "../../hooks/useTreeZoom"

const NODE_WIDTH = 120
const NODE_HEIGHT = 60

interface ProcessTreeProps {
  treeData: TreeNode
}

export default function ProcessTree({ treeData }: ProcessTreeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { zoom, translate } = useTreeZoom(treeData, containerRef, NODE_HEIGHT, NODE_WIDTH)

  const onClickNode = (nodeDatum: TreeNodeDatum) => {
    alert(`Clicou em: ${nodeDatum.name}`)
  }

  return (
    <Container ref={containerRef}>
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
          <CustomNode nodeDatum={nodeDatum} onClick={onClickNode} />
        )}
      />
    </Container>
  )
}

interface CustomNodeProps {
  nodeDatum: TreeNodeDatum
  onClick: (nodeDatum: TreeNodeDatum) => void
}

function CustomNode({ nodeDatum, onClick }: CustomNodeProps) {
  return (
    <NodeGroup onClick={() => onClick(nodeDatum)}>
      <NodeRect width={NODE_WIDTH} height={NODE_HEIGHT} />
      <foreignObject width={NODE_WIDTH} height={NODE_HEIGHT} x={-NODE_WIDTH / 2} y={-NODE_HEIGHT / 2}>
        <NodeText width={NODE_WIDTH} height={NODE_HEIGHT}>
          {nodeDatum.name}
        </NodeText>
      </foreignObject>
    </NodeGroup>
  )
}
