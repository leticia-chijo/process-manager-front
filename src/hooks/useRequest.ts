import { useState } from "react"

export function useRequest<T>(requestFn: () => Promise<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  function fetchData() {
    setLoading(true)
    setError(null)

    requestFn()
      .then((res) => setData(res))
      .catch((err) => setError(err.response.data || "Ocorreu um erro"))
      .finally(() => setLoading(false))
  }

  return { data, loading, error, fetchData }
}
