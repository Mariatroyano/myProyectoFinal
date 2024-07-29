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
    <nav className=" headerNav">
      <div className="div">
        <img src={""} alt="" className="" />

        <img className="header__logo" src={imgen} alt="p" />
        <h1 className="titulo">Eleganza </h1>
      </div>
      <div className="buscador">
        <div className="nav-right">
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
