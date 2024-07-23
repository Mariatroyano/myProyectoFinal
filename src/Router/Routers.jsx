import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Formulario from "../collections/login/Formulario";
import Register from "../collections/register";
import App from "../collections/app/App";

export default function Routers() {
  const [Logeado, setLogeado] = useState(false);
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
