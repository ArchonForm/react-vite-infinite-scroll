import { Routes, Route, Navigate } from "react-router-dom"
import BeersPage from "./pages/BeersPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/*" element={<Navigate to="/beers" replace />}></Route>
      </Routes>
    </>
  )
}

export default App
