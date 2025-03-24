import { Outlet } from "react-router-dom"
import AddMenu from "../../components/AddMenu"
import { ScreenContainer } from "./styled"

export default function AddPages() {
  return (
    <ScreenContainer>
      <AddMenu />
      <Outlet />
    </ScreenContainer>
  )
}
