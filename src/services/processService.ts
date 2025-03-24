import { api } from "./api"
import { ProcessBody } from "../types/process"

export const ProcessService = {
  async getAll() {
    const response = await api.get("/process/list")
    return response.data
  },

  async getAllNested() {
    const response = await api.get("/process/nested")
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`/process/${id}`)
    return response.data
  },

  async create(data: ProcessBody) {
    const response = await api.post("/process", data)
    return response.data
  },

  async update(id: number, data: ProcessBody) {
    const response = await api.put(`/process/${id}`, data)
    return response.data
  }
}
