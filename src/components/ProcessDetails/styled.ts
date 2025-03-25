import { motion } from "framer-motion"
import styled from "styled-components"
import { colors } from "@/constants/colors"
import { MOBILE, NAV_BAR_HEIGHT } from "@/constants/sizes"

export const DetailsContainer = styled(motion.div)`
  height: calc(100vh - 48px - ${NAV_BAR_HEIGHT}px);
  padding: 24px;
  box-shadow: -2px 0px 15px rgba(0, 0, 0, 0.08);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${MOBILE}px) {
    width: calc(100vw - 48px);
    height: 60%;
    position: absolute;
    bottom: 0;
    overflow-y: scroll;
  }
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
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
  color: ${colors.secondary};
  @media (max-width: ${MOBILE}px) {
    font-size: 24px;
    line-height: 24px;
  }
`

export const Line = styled.div`
  background-color: ${colors.primaryText};
  width: 100%;
  height: 1px;
  opacity: 0.1;
  margin-bottom: 4px;
`

export const Text = styled.span`
  font-size: 18px;
  color: ${colors.primaryText};
  strong {
    font-weight: 600;
    color: ${colors.secondary};
  }
  @media (max-width: ${MOBILE}px) {
    font-size: 16px;
  }
`

export const PrioritySection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const PriorityChip = styled.span<{ color: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ color }) => color};
  color: ${colors.primaryContrast};
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ListItem = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${colors.background};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.4s;
  &:hover {
    background-color: ${colors.primaryLight};
  }
`

export const ListImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`

export const ExternalLinkImage = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
  background-color: ${colors.primary};
  padding: 5px 4px 5px 6px;
  border-radius: 4px;
`

export const ListText = styled(Text)`
  font-size: 16px;
`
