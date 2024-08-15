import React from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          Copyright © 2024 - Todos los Derechos Reservados. Eleganza marca
          propia de INCOCO SA Nit. 891401345-1 - Tienda de Ropa para Hombre y
          Mujer, Pereira - Colombia
          <a href="" className="text-blue-400 hover:text-blue-300"></a>
        </p>
        <ul className="list-none p-0 m-0 flex flex-wrap justify-center">
          ¿
          <li className="mx-2">
          <Link to="/PolitPrivacidad" className="text-gray-200 hover:text-blue-400">
              Politicas y Privacidad
            </Link>
          </li>
      
          <li className="mx-2">
            <Link to="/Terminos" className="text-gray-200 hover:text-blue-400">
              Términos y Condiciones
            </Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </footer>
  );
};

export default Footer;
