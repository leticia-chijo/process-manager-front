export type Area = {
  id: number
  name: string
}

export type AreaBody = Omit<Area, "id">
