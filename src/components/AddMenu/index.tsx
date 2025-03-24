import {
  ROUTE_ADD_AREA,
  ROUTE_ADD_DOC,
  ROUTE_ADD_PROCESS,
  ROUTE_ADD_SUB_PROCESS,
  ROUTE_ADD_TEAM,
  ROUTE_ADD_TOOL
} from "../../constants/routes"
import MenuButton from "./MenuButton"
import { MenuContainer } from "./styled"
import { RiTeamFill } from "react-icons/ri"
import { IoDocumentText } from "react-icons/io5"
import { FaCog, FaCogs, FaShareAlt, FaTools } from "react-icons/fa"

export default function AddMenu() {
  const pages = [
    { text: "Área", link: ROUTE_ADD_AREA, icon: <FaShareAlt /> },
    { text: "Documento", link: ROUTE_ADD_DOC, icon: <IoDocumentText /> },
    { text: "Ferramenta", link: ROUTE_ADD_TOOL, icon: <FaTools /> },
    { text: "Processo", link: ROUTE_ADD_PROCESS, icon: <FaCog /> },
    { text: "Sub-Processo", link: ROUTE_ADD_SUB_PROCESS, icon: <FaCogs /> },
    { text: "Time", link: ROUTE_ADD_TEAM, icon: <RiTeamFill /> }
  ]

  return (
    <MenuContainer>
      {pages.map((page) => (
        <MenuButton key={page.text} {...page} />
      ))}
    </MenuContainer>
  )
}
