import { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalState"

export function useGlobalState() {
  const context = useContext(GlobalStateContext)

  if (!context) {
    throw new Error("useGlobalState deve ser usado dentro de um GlobalStateProvider")
  }
  
  return context
}
