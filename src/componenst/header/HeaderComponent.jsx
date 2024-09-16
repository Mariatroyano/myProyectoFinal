import imgen from "../../../public/logo.jpg";
import React, { useState } from "react";
import { CartCarrito } from "../Cart-Button/CarCarrito.jsx";
import Search from "../buscador/search.jsx";
import { useFetch } from "../../index.js";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales.js";
import { CartButtonComponent } from "../Cart-Button/BotonCarrito.jsx";
import { useNavigate } from "react-router-dom"; // Importa el hook para navegación

export const HeaderComponent = ({
  notifications,
  username,
  onLogOut,
  onSeeDetail,
  LoGo,
  img,
  isModalOpen,
  openModal,
  closeModal,
  setProductsFiltrados,
  ...props
}) => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");
  const [value, setValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate(); // Hook para redirigir

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("Se cerró la sesión");
      navigate("/login"); // Redirige a la página de login
    } catch (error) {
      console.log("No se cerró la sesión");
    }
  };

  const userInitial = username ? username.charAt(0).toUpperCase() : "";

  return (
    <nav className="bg-white p-4 sm:p-6 flex items-center justify-between shadow-lg flex-wrap">
      <div className="flex items-center">
        <img
          src={imgen}
          alt="Logo"
          className="w-16 h-16 sm:w-24 sm:h-24 mr-2 sm:mr-4 object-contain animate-pulse"
        />
        <h1 className="text-black text-2xl sm:text-4xl font-bold">Eleganza</h1>
      </div>

      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden sm:flex flex-1 justify-center">
        <Search
          products={products}
          value={value}
          setValue={setValue}
          setProductsFiltrados={setProductsFiltrados}
        />
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 sm:hidden flex flex-col items-center">
          <div className="mb-4">
            <Search
              products={products}
              value={value}
              setValue={setValue}
              setProductsFiltrados={setProductsFiltrados}
            />
          </div>
          {username && (
            <div className=" text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold mb-4">
              {userInitial}
            </div>
          )}
        </div>
      )}

      <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
        {username && (
          <div className=" text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl font-bold">
            {userInitial}
          </div>
        )}
        <CartButtonComponent onCartClick={openModal} />
        {isModalOpen && <CartCarrito onClose={closeModal} />}

        <button
          onClick={cerrarSesion}
          className="bg-red-500 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded hover:bg-red-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
