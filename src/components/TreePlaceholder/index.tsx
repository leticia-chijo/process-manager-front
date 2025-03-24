import placeholderTree from "../../assets/images/tree.png"
import { Container, Image, Text } from "./styled"

export default function TreePlaceholder() {
  return (
    <Container>
      <Image src={placeholderTree} alt="Placeholder Árvore" />
      <Text>Selecione um processo para ver a sua árvore</Text>
    </Container>
  )
}
