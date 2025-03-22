import axios from "axios"
import { useEffect, useState } from "react"
import { Process } from "./types/process"
import { convertToTree } from "./utils/convertDataToTree"
import ProcessTree from "./components/ProcessTree"
import { TreeNode } from "./types/treeNode"
import styled from "styled-components"
import { TreeContainer } from "./components/ProcessTree/styled"
import Dropdown from "./components/Dropdown"

export default function App() {
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<TreeNode | null>(null)

  useEffect(() => {
    axios
      .get<Process[]>(`${import.meta.env.VITE_API_URL}/process/nested`)
      .then((res) => {
        const tree = convertToTree(res.data)
        setTreeData(tree)
      })
      .catch((err) => console.log(err.response.data))
  }, [])

  if (!treeData) return <p>Carregando...</p>

  return (
    <ScreenContainer>
      <Dropdown treeData={treeData} setSelectedProcess={setSelectedProcess} />
      {selectedProcess ? <ProcessTree treeData={selectedProcess} /> : <TreeContainer />}
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
