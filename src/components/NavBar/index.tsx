import { ButtonsContainer, NavBarContainer, NavButton } from "./styled"
import { PiTreeBold } from "react-icons/pi"
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { useLocation } from "react-router-dom"
import { ROUTE_ADD, ROUTE_ADD_AREA, ROUTE_HOME } from "../../constants/routes"

export default function NavBar() {
  const location = useLocation()

  return (
    <NavBarContainer>
      <ButtonsContainer>
        <NavButton to={ROUTE_HOME} $active={location.pathname === ROUTE_HOME}>
          <PiTreeBold />
          <p>Processos</p>
        </NavButton>
        <NavButton to={`${ROUTE_ADD}/${ROUTE_ADD_AREA}`} $active={location.pathname.includes(ROUTE_ADD)}>
          <MdOutlineAddCircleOutline />
          <p>Adicionar</p>
        </NavButton>
      </ButtonsContainer>
    </NavBarContainer>
  )
}
