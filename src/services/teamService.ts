import { TeamBody } from "../types/team"
import { api } from "./api"

const url = "/teams"

export const TeamService = {
  async getAll() {
    const response = await api.get(url)
    return response.data
  },

  async getById(id: number) {
    const response = await api.get(`${url}/${id}`)
    return response.data
  },

  async create(data: TeamBody) {
    const response = await api.post(url, data)
    return response.data
  },

  async update(id: number, data: TeamBody) {
    const response = await api.put(`${url}/${id}`, data)
    return response.data
  }
}
