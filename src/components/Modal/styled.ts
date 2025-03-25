import { colors } from "@/constants/colors"
import { MOBILE } from "@/constants/sizes"
import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.secondary};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
  background-color: ${colors.background};
  transition: background-color 0.4s;
  &:hover {
    background-color: ${colors.primaryLight};
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  flex-grow: 1;
  color: ${colors.secondary};
  margin-right: -32px;
`

export const Line = styled.div`
  background-color: ${colors.primaryText};
  width: 100%;
  height: 1px;
  opacity: 0.1;
  margin-top: 12px;
  margin-bottom: 20px;
`

export const Message = styled.p`
  color: ${colors.primaryText}
`
