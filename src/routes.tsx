import { Route, Routes } from "react-router-dom";
import { SingIn } from "./pages/SignIn";
import { SingUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

export function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/signin" element={<SingIn />} />

      <Route path="/signup" element={<SingUp />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={"Pagina nao encontrada"} />
    </Routes>
  )
}
