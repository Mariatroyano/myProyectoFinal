import React from "react";
import imagen from "../../../public/carrito.png";
import "./CartButtonComponent.css";
import useCartStore from "../../store/cart/useCartStore";

export const CartButtonComponent = ({ onCartClick }) => {
  const countProducts = useCartStore(state=>state.cart.length)
  return (
    <button className="cart-button" onClick={onCartClick}>
      <img  className="imagen"  src={imagen} alt="Cart" />
      <span className="item-count">{countProducts}</span>
    </button>
  );
};
