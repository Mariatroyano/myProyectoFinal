import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../componenst/app/App";
import Formulario from "../componenst/login/login";
import { Register } from "../componenst/Formulario";
import Terminos from "../componenst/Footer/Terminos";
import PolitPrivacidad from "../componenst/Footer/PolitPrivacidad";
import ProductoDetal from "../pages/ProductoDetal/ProductoDetal";
import Factura from "../componenst/Factura/Factura";
import routes from "../common/routes-constants";
import InfoUsuario from "../componenst/InfoUsuario/InfoUsuario";

const {
  LOGING,
  TERMINEMOS,
  POLIT_PRIVACIDAD,
  PRODUCT,
  FACTURA,
  PRODUCTS,
  REGISTER,
} = routes;

export default function Routers() {
  const [Logeado, setLogeado] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path={LOGING}
          element={<Formulario Logeado={Logeado} setLogeado={setLogeado} />}
        />
        <Route path={REGISTER} element={<Register />} />
        <Route path={"/inf"} element={<InfoUsuario />} />
        <Route path={TERMINEMOS} element={<Terminos />} />
        <Route path={POLIT_PRIVACIDAD} element={<PolitPrivacidad />} />
        <Route path={`${PRODUCT}/:id`} element={<ProductoDetal />} />
        <Route path={FACTURA} element={<Factura />} />
        <Route
          path={PRODUCTS}
          element={<App Logeado={Logeado} setLogeado={setLogeado} />}
        />
      </Routes>
    </Router>
  );
}
