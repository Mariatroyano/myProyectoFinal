import React from "react";
import imagen from "../../../public/carrito.png";
import "./CartButtonComponent.css";

export const CartButtonComponent = ({ itemCount, onCartClick }) => {
  return (
    <button className="cart-button" onClick={onCartClick}>
      <img  className="imagen"  src={imagen} alt="Cart" />
      <span className="item-count">{itemCount}</span>
    </button>
  );
};
