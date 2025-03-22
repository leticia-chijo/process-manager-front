import { RefObject, useEffect, useMemo, useState } from "react"
import { TreeNode } from "../types/treeNode"

// Calcular profundidade máxima da árvore (em nós)
function getDepth(node: TreeNode): number {
  if (!node.children || node.children.length === 0) return 1
  const childDepths = node.children.map((child) => getDepth(child))
  return 1 + Math.max(...childDepths)
}

// Calcular largura máxima da árvore (em nós)
function getMaxWidth(node: TreeNode): number {
  const nodesPerDepth: { [depth: number]: number } = {}
  const countNodesAtDepth = (node: TreeNode, depth: number) => {
    nodesPerDepth[depth] = (nodesPerDepth[depth] || 0) + 1
    if (node.children) {
      for (const child of node.children) {
        countNodesAtDepth(child, depth + 1)
      }
    }
  }
  countNodesAtDepth(node, 0)
  return Math.max(...Object.values(nodesPerDepth))
}

export default function useTreeZoom(
  treeData: TreeNode,
  containerRef: RefObject<HTMLDivElement | null>,
  nodeHeight: number,
  nodeWidth: number
) {
  const treeVerticalNodes = useMemo(() => getDepth(treeData), [treeData])
  const treeHorizontalNodes = useMemo(() => getMaxWidth(treeData), [treeData])
  const [zoom, setZoom] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!treeData || !containerRef?.current) return

    const updateZoomAndTranslate = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const containerHeight = containerRef.current.offsetHeight

      const treeWidth = treeHorizontalNodes * nodeWidth * 1.5
      const treeHeight = treeVerticalNodes * nodeHeight * 2.5

      // Definir um zoom baseado na largura e altura
      const zoomWidth = containerWidth / treeWidth
      const zoomHeight = containerHeight / treeHeight
      const calculatedZoom = Math.min(zoomWidth, zoomHeight)
      setZoom(calculatedZoom)

      // Ajustar a posição inicial para centralizar a árvore
      setTranslate({
        x: containerWidth / 2,
        y: containerHeight / 2 - (treeHeight * calculatedZoom) / 2 + (nodeHeight * calculatedZoom*1.5) 
      })
    }

    // Definir ResizeObserver
    const observer = new ResizeObserver(updateZoomAndTranslate)
    observer.observe(containerRef.current)

    // Cleanup
    return () => observer.disconnect()
  }, [treeVerticalNodes, treeHorizontalNodes])

  return { zoom, translate }
}
