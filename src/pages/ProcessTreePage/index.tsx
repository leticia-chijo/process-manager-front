import axios from "axios"
import { useEffect, useState } from "react"
import { Process } from "../../types/process"
import { convertToTree } from "../../utils/convertDataToTree"
import ProcessTree from "../../components/ProcessTree"
import { TreeNode } from "../../types/treeNode"
import Dropdown from "../../components/Dropdown"
import ProcessDetails from "../../components/ProcessDetails"
import TreePlaceholder from "../../components/TreePlaceholder"
import NavBar from "../../components/NavBar"
import { ScreenContainer, TreeSelectContainer } from "./styled"

export default function ProcessTreePage() {
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
          <TreePlaceholder />
        )}
      </TreeSelectContainer>
      {detailsId !== 0 && <ProcessDetails detailsId={detailsId} setDetailsId={setDetailsId} />}
    </ScreenContainer>
  )
}
