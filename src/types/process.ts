export type Team = {
  id: number
  name: string
  area: { name: string }
}

export type Doc = {
  id: number
  name: string
  link: string
}

export type Tool = {
  id: number
  name: string
  link: string
  image?: string
  purpose: string
}

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
