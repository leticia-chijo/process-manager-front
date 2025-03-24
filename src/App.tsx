import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProcessTreePage from "./pages/ProcessTreePage"
import NavBar from "./components/NavBar"
import ErrorPage from "./pages/ErrorPage"
import AddPages from "./pages/AddPages"
import { ROUTE_ADD, ROUTE_HOME } from "./constants/routes"
import GlobalState from "./context/GlobalState"

export default function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={ROUTE_HOME} element={<ProcessTreePage />} />
          <Route path={ROUTE_ADD} element={<AddPages />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  )
}
