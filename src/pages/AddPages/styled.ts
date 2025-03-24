import styled from "styled-components"
import { MOBILE, NAV_BAR_HEIGHT } from "../../constants/sizes"

export const ScreenContainer = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`
