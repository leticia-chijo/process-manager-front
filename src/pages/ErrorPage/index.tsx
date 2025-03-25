import { Image, ScreenContainer, Text } from "./styled"
import sadCat from "@/assets/images/sad-cat.png"

export default function ErrorPage() {
  return (
    <ScreenContainer>
      <Image src={sadCat} alt="Um gatinho com cara triste" />
      <Text>A página que você tentou acessar não existe!</Text>
    </ScreenContainer>
  )
}
