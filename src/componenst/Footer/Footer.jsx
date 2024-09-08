import React from "react";
import { Link, Outlet } from "react-router-dom";
import routes from "../../common/routes-constants";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm sm:text-base">
          Copyright © 2024 - Todos los Derechos Reservados. Eleganza marca propia
          de INCOCO SA Nit. 891401345-1 - Tienda de Ropa para Hombre y Mujer,
          Pereira - Colombia
        </p>
        <ul className="list-none p-0 m-0 flex flex-wrap justify-center space-x-4">
          <li>
            <Link
              to={routes.POLIT_PRIVACIDAD}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              Políticas y Privacidad
            </Link>
          </li>
          <li>
            <Link
              to={routes.TERMINEMOS}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              Términos y Condiciones
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
