import Select from "react-select"
import styled from "styled-components"

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif", // Aplica a fonte
      borderRadius: "4px"
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif" // Aplica a fonte no dropdown
    }),
    option: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif" // Aplica a fonte nas opções
    }),
    singleValue: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif" // Aplica a fonte no valor selecionado
    })
  }
})`
  width: 70%;
  @media (max-width: 600px) {
    width: 90%;
  }
`
