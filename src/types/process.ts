import { Doc } from "./doc"
import { Team } from "./team"
import { Tool } from "./tool"

export type Process = {
  id: number
  title: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  team: Team
  docs: Doc[]
  tools: Tool[]
  subProcesses: Process[]
}

export type ProcessBody = {
  title: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  docs: number[]
  tools: { id: number; purpose: string }[]
  teamId: number
  parentId: number | null
}

export type ProcessFormData = {
  title: string
  priority: { id: "HIGH" | "MEDIUM" | "LOW"; name: string }
  docs: Doc[]
  tools: { id: number; purpose: string }[]
  teamId: { id: number; name: string }
  parentId?: Process | null
}
