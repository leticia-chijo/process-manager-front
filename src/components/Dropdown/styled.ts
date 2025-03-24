import Select from "react-select"
import styled from "styled-components"
import { MOBILE } from "../../constants/sizes"
import { colors } from "../../constants/colors"

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif",
      borderRadius: "4px"
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif"
    }),
    option: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif"
    }),
    singleValue: (base) => ({
      ...base,
      fontFamily: "Calibri, sans-serif"
    })
  }
})`
  width: 70%;
  @media (max-width: ${MOBILE}px) {
    width: 80%;
  }
`

export const LabelText = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 4px;
  color: ${colors.primaryText};
`
