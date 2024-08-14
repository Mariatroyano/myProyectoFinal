import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../componenst/app/App";
import Formulario from "../componenst/login/login";
import { Register } from "../componenst/Formulario";

export default function Routers() {
  const [Logeado, setLogeado] = useState(true);
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Formulario Logeado={Logeado} setLogeado={setLogeado} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={<App Logeado={Logeado} setLogeado={setLogeado} />}
        />
      </Routes>
    </Router>
  );
}
