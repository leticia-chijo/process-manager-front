import { Process } from "./process"
import { TreeNode } from "./treeNode"

export interface GlobalStateType {
  processes: Process[] | null
  loading: boolean
  error: string | null
  selectedProcess: TreeNode | null
  setSelectedProcess: (process: TreeNode | null) => void
}
