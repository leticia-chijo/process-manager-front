import { Process } from "./process"
import { TreeNode } from "./treeNode"

export interface GlobalStateType {
  processes: Process[] | null
  setProcesses: (process: Process[] | null) => void
  loading: boolean
  error: string | null
  selectedProcess: TreeNode | TreeNode[] | null
  setSelectedProcess: (process: TreeNode | TreeNode[] | null) => void
}
