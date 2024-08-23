import imgen from "../../../public/logo.jpg";
import React from "react";
import { CartButtonComponent } from "../Cart-Button/Cart-Button.jsx";
import { CartModalComponent } from "../Carcarrito/CarCarrito.jsx";
import Search from "../search/search.jsx";
import { useFetch } from "../../index.js";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales.js";

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
  ...props
}) => {
  const { data: products } = useFetch(
    "https://api-productos-categorias.vercel.app/products"
  );
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("Se cerro la sesion");
    } catch (error) {
      console.log("no Se cerro la sesion");
    }
  };
  return (
    <nav className="bg-white p-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <button onClick={cerrarSesion} className="text-black">Cerrar Sesion</button>
        <img
          src={imgen}
          alt="Logo"
          className="w-24 h-24 mr-4 object-contain animate-pulse"
        />
        <h1 className="text-black text-4xl font-bold">Eleganza</h1>
      </div>
      <div className="flex-1 mx-8">
        <div className="flex justify-center">
          <Search products={products} />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <CartButtonComponent onCartClick={openModal} />
        {isModalOpen && <CartModalComponent onClose={closeModal} />}
      </div>
    </nav>
  );
};
