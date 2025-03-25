import styled from "styled-components"
import { BORDER_RADIUS, MOBILE, NAV_BAR_HEIGHT } from "@/constants/sizes"
import { colors } from "@/constants/colors"

export const ScreenContainer = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`

export const SubmitButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  width: 40%;
  height: 40px;
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${BORDER_RADIUS}px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${colors.primary};
  color: ${colors.primaryContrast};
  transition: all 0.5s;
  &:hover {
    background-color: ${colors.primaryLight};
    color: ${colors.secondary};
  }
`
