import { TreeNodeDatum } from "react-d3-tree"

export type TreeNode = {
  id: number
  name: string
  children?: TreeNode[]
}

export interface CustomNodeDatum extends TreeNodeDatum {
  id: number
}
