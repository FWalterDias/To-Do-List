import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { SingIn } from "./pages/SignIn";
import { SingUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { useAuth } from "./hooks/useAuth";

export function MainRoutes() {

  type ProtectedRoutsProps = {
    redrectTo: string
  }

  function ProtectedRouts({ redrectTo }: ProtectedRoutsProps) {
    const { handleGetToken } = useAuth();

    return handleGetToken() ? <Outlet /> : <Navigate to={redrectTo} />
  }

  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/signin" element={<SingIn />} />

      <Route path="/signup" element={<SingUp />} />


      <Route element={<ProtectedRouts redrectTo={"/"} />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={"Pagina nao encontrada"} />
    </Routes>
  )
}
