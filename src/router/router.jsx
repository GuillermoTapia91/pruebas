import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import SignUp from "../pages/SignUp/signUp";
import MiInformacion from "../pages/MiInformacion/miInformacion";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi-informacion" element={<MiInformacion />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
