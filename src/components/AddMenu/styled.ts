import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "@/constants/colors"
import { ADD_BAR_WIDTH, MOBILE } from "@/constants/sizes"

export const MenuContainer = styled.div`
  min-width: ${ADD_BAR_WIDTH}px;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${colors.primaryLight};
  @media (max-width: ${MOBILE}px) {
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`

export const NavButton = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  margin: 2px 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $active }) => ($active ? colors.primaryContrast : colors.secondary)};
  background-color: ${({ $active }) => $active && colors.primary};
  transition: all 0.5s;
  p {
    margin-left: 8px;
  }
  @media (max-width: ${MOBILE}px) {
    box-sizing: border-box;
    height: 50px;
    font-size: 16px;
    flex-direction: column;
    border-radius: 0;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    justify-content: center;
    border-top: ${({ $active }) =>
      $active ? `2px solid ${colors.primaryContrast}` : `2px solid ${colors.primaryLight}`};
    p {
      font-size: 10px;
      margin-left: 0;
      margin-top: 4px;
    }
  }
`
