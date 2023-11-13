import { Route, Routes } from "react-router-dom";
import { Singin } from "./pages/Signin";
import { Singup } from "./pages/Signup";

export function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Singin />} />
      <Route path="/signin" element={<Singin />} />

      <Route path="/signup" element={<Singup />} />

      <Route path="*" element={"Pagina nao encontrada"} />
    </Routes>
  )
}
