import styled from "styled-components"
import { colors } from "../../constants/colors"

interface NodeProps {
  width: number
  height: number
}

const PADDING = 8
const BORDER_RADIUS = 8

export const Container = styled.div`
  width: 70%;
  height: 400px;
  border: 1px solid #ccc;
  position: relative;
  @media (max-width: 600px) {
    width: 90%;
    height: 300px;
  }
`

export const NodeGroup = styled.g`
  cursor: pointer;
`

export const NodeRect = styled.rect<NodeProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  x: ${(props) => -(props.width + PADDING) / 2}px;
  y: ${(props) => -props.height / 2}px;
  fill: ${colors.primary};
  stroke: ${colors.border};
  stroke-width: 2;
  rx: ${BORDER_RADIUS}px;
  ry: ${BORDER_RADIUS}px;
`

export const NodeText = styled.div<NodeProps>`
  width: ${(props) => props.width - PADDING}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  color: ${colors.primaryContrast};
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
`

