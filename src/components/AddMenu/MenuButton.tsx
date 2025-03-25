import { useLocation } from "react-router-dom"
import { NavButton } from "./styled"
import { ReactNode } from "react"
import { ROUTE_ADD } from "@/constants/routes"

interface Props {
  text: string
  link: string
  icon: ReactNode
}
export default function MenuButton({ text, link, icon }: Props) {
  const location = useLocation()

  return (
    <NavButton to={`${ROUTE_ADD}/${link}`} $active={location.pathname.includes(link)}>
      {icon}
      <p>{text}</p>
    </NavButton>
  )
}
