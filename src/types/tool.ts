export type Tool = {
  id: number
  name: string
  link: string
  image?: string
  purpose: string
}

export type ToolBody = Omit<Tool, "id" | "purpose">
