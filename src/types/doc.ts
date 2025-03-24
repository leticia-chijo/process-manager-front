export type Doc = {
  id: number
  name: string
  link: string
}

export type DocBody = Omit<Doc, "id">