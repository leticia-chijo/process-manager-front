import styled from "styled-components"
import { TreeContainer } from "../ProcessTree/styled"
import { colors } from "@/constants/colors"
import { MOBILE } from "@/constants/sizes"

export const Container = styled(TreeContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`

export const Image = styled.img`
  width: 200px;
  @media (max-width: ${MOBILE}px) {
    width: 160px;
  }
`

export const Text = styled.p`
  color: ${colors.neutral};
  font-size: 20px;
  text-align: center;
  @media (max-width: ${MOBILE}px) {
    font-size: 18px;
  }
`
