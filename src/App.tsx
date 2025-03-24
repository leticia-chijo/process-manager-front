import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProcessTreePage from "./pages/ProcessTreePage"
import NavBar from "./components/NavBar"
import ErrorPage from "./pages/ErrorPage"
import AddPages from "./pages/AddPages"
import {
  ROUTE_ADD,
  ROUTE_ADD_AREA,
  ROUTE_ADD_DOC,
  ROUTE_ADD_PROCESS,
  ROUTE_ADD_SUB_PROCESS,
  ROUTE_ADD_TEAM,
  ROUTE_ADD_TOOL,
  ROUTE_HOME
} from "./constants/routes"
import GlobalState from "./context/GlobalState"
import AddArea from "./pages/AddPages/AddArea"
import AddTeam from "./pages/AddPages/AddTeam"
import AddDoc from "./pages/AddPages/AddDoc"
import AddTool from "./pages/AddPages/AddTool"
import AddProcess from "./pages/AddPages/AddProcess"
import AddSubProcess from "./pages/AddPages/AddSubProcess"

export default function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={ROUTE_HOME} element={<ProcessTreePage />} />
          <Route path={ROUTE_ADD} element={<AddPages />}>
            <Route path={ROUTE_ADD_AREA} element={<AddArea />} />
            <Route path={ROUTE_ADD_DOC} element={<AddDoc />} />
            <Route path={ROUTE_ADD_TOOL} element={<AddTool />} />
            <Route path={ROUTE_ADD_PROCESS} element={<AddProcess />} />
            <Route path={ROUTE_ADD_SUB_PROCESS} element={<AddSubProcess />} />
            <Route path={ROUTE_ADD_TEAM} element={<AddTeam />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  )
}
