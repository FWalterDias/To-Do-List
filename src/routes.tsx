import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
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
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />


      <Route element={<ProtectedRouts redrectTo={"/"} />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={"Pagina nao encontrada"} />
    </Routes>
  )
}
