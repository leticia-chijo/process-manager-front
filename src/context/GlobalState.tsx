import { createContext, ReactNode, useEffect, useState } from "react"
import { GlobalStateType } from "../types/globalState"
import { useRequest } from "../hooks/useRequest"
import { ProcessService } from "../services/processService"
import { TreeNode } from "../types/treeNode"
import { Process } from "../types/process"

export const GlobalStateContext = createContext<GlobalStateType | null>(null)

interface Props {
  children: ReactNode
}

export default function GlobalState({ children }: Props) {
  const { data: processes, loading, error, fetchData } = useRequest<Process[]>(ProcessService.getAllNested)
  const [selectedProcess, setSelectedProcess] = useState<TreeNode | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const state: GlobalStateType = { processes, loading, error, selectedProcess, setSelectedProcess }
  return <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
}
