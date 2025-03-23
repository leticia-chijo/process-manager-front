import styled from "styled-components"
import { colors } from "../../constants/colors"
import { MOBILE, NODE_HEIGHT, NODE_WIDTH } from "../../constants/sizes"

const PADDING = 8
const BORDER_RADIUS = 8

export const TreeContainer = styled.div`
  width: 70%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  background-color: white;
  @media (max-width: ${MOBILE}px) {
    width: 80%;
    height: 300px;
  }
`

export const NodeGroup = styled.g`
  cursor: pointer;
`

export const NodeRect = styled.rect`
  width: ${NODE_WIDTH}px;
  height: ${NODE_HEIGHT}px;
  x: ${-(NODE_WIDTH + PADDING) / 2}px;
  y: ${-NODE_HEIGHT / 2}px;
  fill: ${colors.primary};
  stroke: ${colors.border};
  stroke-width: 2;
  rx: ${BORDER_RADIUS}px;
  ry: ${BORDER_RADIUS}px;
`

export const NodeText = styled.div`
  width: ${NODE_WIDTH - PADDING}px;
  height: ${NODE_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  color: ${colors.primaryContrast};
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  font-family: Calibri, sans-serif;
`
