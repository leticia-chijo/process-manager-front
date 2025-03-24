import styled from "styled-components"
import { colors } from "../../constants/colors"
import { Link } from "react-router-dom"
import { MOBILE } from "../../constants/sizes"

export const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  box-sizing: border-box;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavButton = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $active }) => ($active ? colors.secondary : colors.primaryContrast)};
  background-color: ${({ $active }) => $active && colors.primaryLight};
  transition: all 0.5s;
  p {
    margin-left: 4px;
  }
  @media (max-width: ${MOBILE}px) {
    padding: 8px 12px;
    :first-child {
      visibility: collapse;
    }
  }
`

export const ButtonsContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
