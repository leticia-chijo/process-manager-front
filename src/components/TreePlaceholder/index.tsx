import { Container, Image, Text } from "./styled"
import placeholderTree from "@/assets/images/tree.png"

export default function TreePlaceholder() {
  return (
    <Container>
      <Image src={placeholderTree} alt="Placeholder Árvore" />
      <Text>Selecione um processo para ver a sua árvore</Text>
    </Container>
  )
}
