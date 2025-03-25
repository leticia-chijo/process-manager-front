import { api } from "./api"
import { ToolBody } from "@/types/tool"

const url = "/tools"

export const ToolService = {
  async getAll() {
    const response = await api.get(url)
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`${url}/${id}`)
    return response.data
  },

  async create(data: ToolBody) {
    const response = await api.post(url, data)
    return response.data
  },

  async update(id: number, data: ToolBody) {
    const response = await api.put(`${url}/${id}`, data)
    return response.data
  }
}
