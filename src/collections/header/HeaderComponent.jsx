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
  addedItems,
  isModalOpen,
  openModal,
  closeModal,
  ...props
}) => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");
  return (
    <nav className=" bg-white p-14 flex h-48 w-full justify-between">
      <div className="flex flex-wrap ">
        <img src={""} alt=""  />

        <img className="bg-black w-20 h-35  animate-pulse" src={imgen} alt="p" />
        <h1 className="text-black text-4xl ">Eleganza </h1>
      </div>
      <div className="flex flex-row ">
        <div >
          <Search products={products} />
        </div>
      </div>
      <div>
        <CartButtonComponent
          itemCount={addedItems?.length}
          onCartClick={openModal}
        />
        {isModalOpen && (
          <CartModalComponent items={addedItems} onClose={closeModal} />
        )}
      </div>
    </nav>
  );
};
