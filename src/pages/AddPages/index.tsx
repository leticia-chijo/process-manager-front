import { Outlet } from "react-router-dom"
import { ScreenContainer } from "./styled"
import AddMenu from "@/components/AddMenu"

export default function AddPages() {
  return (
    <ScreenContainer>
      <AddMenu />
      <Outlet />
    </ScreenContainer>
  )
}
