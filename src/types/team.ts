export type Team = {
  id: number
  name: string
  area: { name: string }
}

export type TeamBody = {
  name: string
  areaId: number
}

export type TeamFormData = {
  name: string
  areaId: { id: number; name: string }
}