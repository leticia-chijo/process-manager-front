import { CloseButton, Header, Line, PriorityChip, PrioritySection, Text, Title } from "./styled"
import { Process } from "../../types/process"
import { priorityMap } from "../../constants/priorityMap"
import DetailsLists from "./DetailsLists"

interface Props {
  process: Process
  onClose: () => void
}

export default function DetailsContent({ process, onClose }: Props) {
  return (
    <>
      <Header>
        <Title>{process.title}</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <Line />

      <Text>
        <strong>Área:</strong> {process.team.area.name}
      </Text>

      <Text>
        <strong>Time:</strong> {process.team.name}
      </Text>

      <PrioritySection>
        <Text>
          <strong>Prioridade:</strong>
        </Text>
        <PriorityChip color={priorityMap[process.priority].color}>
          {priorityMap[process.priority].label}
        </PriorityChip>
      </PrioritySection>

      {process.tools.length > 0 && <DetailsLists data={process.tools} title={"Ferramentas"} />}
      {process.tools.length > 0 && <DetailsLists data={process.docs} title={"Documentos"} />}
    </>
  )
}
