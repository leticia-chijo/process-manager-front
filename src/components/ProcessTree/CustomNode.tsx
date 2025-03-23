import { NODE_HEIGHT, NODE_WIDTH } from "../../constants/sizes"
import { NodeGroup, NodeRect, NodeText } from "./styled"
import { CustomNodeDatum } from "../../types/treeNode"

interface Props {
  nodeDatum: CustomNodeDatum
  onClick: (nodeDatum: CustomNodeDatum) => void
}

export default function CustomNode({ nodeDatum, onClick }: Props) {
  return (
    <NodeGroup onClick={() => onClick(nodeDatum)}>
      <NodeRect />
      <foreignObject width={NODE_WIDTH} height={NODE_HEIGHT} x={-NODE_WIDTH / 2} y={-NODE_HEIGHT / 2}>
        <NodeText>{nodeDatum.name}</NodeText>
      </foreignObject>
    </NodeGroup>
  )
}
