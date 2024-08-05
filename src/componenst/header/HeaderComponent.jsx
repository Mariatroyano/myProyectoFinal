import "./HeaderComponent.css";
import imgen from "../../../public/logo.jpg";
import React, { useEffect, useState } from "react";
import { CartButtonComponent } from "../Cart-Button/Cart-Button.jsx";
import { CartModalComponent } from "../Modal-components/Modal.jsx";
import Search from "../search/search.jsx";
import { useFetch } from "../../index.js";

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
  const { data: products } = useFetch("https://api-productos-categorias.vercel.app/products");
  return (
    <nav className=" bg-white p-14 flex h-48 w-full justify-between">
      <div className="flex flex-wrap ">
        <img src={""} alt=""  />

        <img className="bg-black w-24 h-35  animate-pulse" src={imgen} alt="p" />
        <h1 className="text-black text-4xl w-30 h-45 ">Eleganza </h1>
      </div>
      <div className="flex flex-row ">
        <div >
          <Search products={products} />
        </div>
      </div>
      <div>
        <CartButtonComponent
          onCartClick={openModal}
        />
        {isModalOpen && (
          <CartModalComponent onClose={closeModal} />
        )}
      </div>
    </nav>
  );
};
