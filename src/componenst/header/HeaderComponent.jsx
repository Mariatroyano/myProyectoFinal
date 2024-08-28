import imgen from "../../../public/logo.jpg";
import React, { useState } from "react";
import { CartModalComponent } from "../Carcarrito/CarCarrito.jsx";
import Search from "../search/search.jsx";
import { useFetch } from "../../index.js";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales.js";
import { CartButtonComponent } from "../Cart-Button/ProductList.jsx";

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
  const { data: products } = useFetch("http://localhost:5814/productos");

  const [value, setValue] = useState("");

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("Se cerro la sesion");
    } catch (error) {
      console.log("no Se cerro la sesion");
    }
  };

  const userInitial = username ? username.charAt(0).toUpperCase() : "";

  return (
    <nav className="bg-white p-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <button onClick={cerrarSesion} className="text-black">
          Cerrar Sesion
        </button>
        <img
          src={imgen}
          alt="Logo"
          className="w-24 h-24 mr-4 object-contain animate-pulse"
        />
        <h1 className="text-black text-4xl font-bold">Eleganza</h1>
      </div>
      <div className="flex-1 mx-8">
        <div className="flex justify-center">
          <Search
            products={products}
            value={value}
            setValue={setValue}
            setProductsFiltrados={setProductsFiltrados}
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        {username && (
          <div className=" text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
            {userInitial}
          </div>
        )}
        <CartButtonComponent onCartClick={openModal} />
        {isModalOpen && <CartModalComponent onClose={closeModal} />}
      </div>
    </nav>
  );
};
