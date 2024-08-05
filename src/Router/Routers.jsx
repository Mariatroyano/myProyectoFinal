import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Formulario from "../componenst/login/Formulario";
import Register from "../componenst/register";
import App from "../componenst/app/App";

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
