import { Process } from "@/types/process"
import { TreeNode } from "@/types/treeNode"

export function convertToTree(processes: Process[]): TreeNode[] {
  return processes.map((process) => ({
    id: process.id,
    name: process.title,
    children:
      Array.isArray(process.subProcesses) && process.subProcesses.length > 0
        ? convertToTree(process.subProcesses)
        : []
  }))
}
