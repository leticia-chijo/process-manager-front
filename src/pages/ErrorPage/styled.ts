import { colors } from "@/constants/colors"
import { MOBILE } from "@/constants/sizes"
import styled from "styled-components"

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 70vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Image = styled.img`
  width: 300px;
  @media (max-width: ${MOBILE}px) {
    width: 200px;
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
