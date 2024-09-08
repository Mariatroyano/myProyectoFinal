import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";
import getLocalStorage from "../../utils/getLocalStorage";

export const ButtonCarrito = ({ id, cantidad }) => {
  const { addToCart } = useContext(CartContext);

  const isAdded = () => {
    return getLocalStorage()?.some((productInCart) => productInCart?.id === id);
  };
  return (
    <div>
      <button
        className={`${
          isAdded ? "bg-blue-600   text-gray-200" : "bg-blue-600  text-gray-100"
        } w-full h-[40px] rounded-md mt-2`}
        onClick={() => addToCart(id, cantidad)}
      >
        {isAdded ? "Comprar" : "Comprado"}
      </button>
    </div>
  );
};
