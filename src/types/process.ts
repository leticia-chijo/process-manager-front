import { Doc } from "./doc"
import { Team } from "./team"
import { Tool } from "./tool"

export type Process = {
  id: number
  title: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  manual: boolean
  team: Team
  docs: Doc[]
  tools: Tool[]
  subProcesses: Process[]
}

export type ProcessBody = {
  title: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  manual: boolean
  docs: number[]
  tools: {id: number, purpose:string}[]
  teamId: number
  parentId: number | null
}
