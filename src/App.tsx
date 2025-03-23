import axios from "axios"
import { useEffect, useState } from "react"
import { Process } from "./types/process"
import { convertToTree } from "./utils/convertDataToTree"
import ProcessTree from "./components/ProcessTree"
import { TreeNode } from "./types/treeNode"
import styled from "styled-components"
import { TreeContainer } from "./components/ProcessTree/styled"
import Dropdown from "./components/Dropdown"
import ProcessDetails from "./components/ProcessDetails"
import { MOBILE } from "./constants/sizes"

export default function App() {
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<TreeNode | null>(null)
  const [detailsId, setDetailsId] = useState<number>(0)

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
      <TreeSelectContainer>
        <Dropdown treeData={treeData} setSelectedProcess={setSelectedProcess} />
        {selectedProcess ? (
          <ProcessTree treeData={selectedProcess} setDetailsId={setDetailsId} />
        ) : (
          <TreeContainer />
        )}
      </TreeSelectContainer>
      {detailsId !== 0 && <ProcessDetails detailsId={detailsId} setDetailsId={setDetailsId} />}
    </ScreenContainer>
  )
}

const ScreenContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`

const TreeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  @media (max-width: ${MOBILE}px) {
    width: 100vw;
    padding-top: 30px;
    justify-content: flex-start;
  }
`
