import axios from "axios"
import { useEffect, useState } from "react"
import { Process } from "./types/process"
import { convertToTree } from "./utils/convertDataToTree"
import ProcessTree from "./components/ProcessTree"
import { TreeNode } from "./types/treeNode"
import styled from "styled-components"

export default function App() {
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<TreeNode | null>(null)

  useEffect(() => {
    axios
      .get<Process[]>(`${import.meta.env.VITE_API_URL}/process/nested`)
      .then((res) => {
        const tree = convertToTree(res.data)
        setTreeData(tree)
        setSelectedProcess(tree[0] || null)
      })
      .catch((err) => console.log(err.response.data))
  }, [])

  if (!selectedProcess || !treeData) return <p>Carregando...</p>

  return (
    <ScreenContaienr>
      <ProcessTree treeData={selectedProcess} />
    </ScreenContaienr>
  )
}

const ScreenContaienr = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
