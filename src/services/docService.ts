import { api } from "./api"
import { DocBody } from "@/types/doc"

const url = "/docs"

export const DocsService = {
  async getAll() {
    const response = await api.get(url)
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`${url}/${id}`)
    return response.data
  },

  async create(data: DocBody) {
    const response = await api.post(url, data)
    return response.data
  },

  async update(id: number, data: DocBody) {
    const response = await api.put(`${url}/${id}`, data)
    return response.data
  }
}
