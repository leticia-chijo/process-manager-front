import styled from "styled-components"
import { MOBILE, NAV_BAR_HEIGHT } from "@/constants/sizes"

export const ScreenContainer = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`

export const TreeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  @media (max-width: ${MOBILE}px) {
    width: 100vw;
    padding-top: 30px;
    justify-content: flex-start;
  }
`
