import { AreaBody } from "../types/area"
import { api } from "./api"

const url = "/areas"

export const AreaService = {
  async getAll() {
    const response = await api.get(url)
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`${url}/${id}`)
    return response.data
  },

  async create(data: AreaBody) {
    const response = await api.post(url, data)
    return response.data
  },

  async update(id: number, data: AreaBody) {
    const response = await api.put(`${url}/${id}`, data)
    return response.data
  }
}
