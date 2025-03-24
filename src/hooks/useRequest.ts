import { useState } from "react"

export function useRequest<T, P = void>(requestFn: (params?: P) => Promise<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  async function executeRequest(params?: P) {
    setLoading(true)
    setError(null)

    try {
      try {
        const res = await requestFn(params)
        setData(res)
        return res
      } catch (err: any) {
        setError(err.response.data || "Ocorreu um erro")
        return null
      }
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, executeRequest }
}
