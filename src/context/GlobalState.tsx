import { createContext, ReactNode, useEffect, useState } from "react"
import { useRequest } from "@/hooks/useRequest"
import { ProcessService } from "@/services/processService"
import { GlobalStateType } from "@/types/globalState"
import { TreeNode } from "@/types/treeNode"
import { Process } from "@/types/process"

export const GlobalStateContext = createContext<GlobalStateType | null>(null)

interface Props {
  children: ReactNode
}

export default function GlobalState({ children }: Props) {
  const { loading, error, executeRequest } = useRequest<Process[]>(ProcessService.getAllNested)
  const [processes, setProcesses] = useState<Process[] | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<TreeNode | null>(null)

  useEffect(() => {
    async function getData() {
      const res = await executeRequest()
      if (res !== null) setProcesses(res)
    }
    getData()
  }, [])

  const state: GlobalStateType = {
    processes,
    setProcesses,
    loading,
    error,
    selectedProcess,
    setSelectedProcess
  }
  return <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
}
