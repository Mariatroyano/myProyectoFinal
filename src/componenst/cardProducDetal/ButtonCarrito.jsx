import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";
// import getLocalStorage from "../../utils/getLocalStorage";

export const ButtonCarrito = ({ id, cantidad }) => {
  const { addToCart } = useContext(CartContext);

  // const isAdded = () => {
  //   return getLocalStorage()?.some((productInCart) => productInCart?.id === id);
  // };
  return (
    <div>
      <button
        className={`${"bg-blue-600  text-gray-100"} w-full h-[40px] rounded-md mt-2`}
        onClick={() => addToCart(id, cantidad)}
      >
        Comprar
      </button>
    </div>
  );
};
