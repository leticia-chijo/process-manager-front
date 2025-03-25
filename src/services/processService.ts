import { api } from "./api"
import { ProcessBody } from "@/types/process"

const url = "/process"

export const ProcessService = {
  async getAll() {
    const response = await api.get(`${url}/list`)
    return response.data
  },

  async getAllNested() {
    const response = await api.get(`${url}/nested`)
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`${url}/${id}`)
    return response.data
  },

  async create(data: ProcessBody) {
    const response = await api.post(url, data)
    return response.data
  },

  async update(id: number, data: ProcessBody) {
    const response = await api.put(`${url}/${id}`, data)
    return response.data
  }
}
