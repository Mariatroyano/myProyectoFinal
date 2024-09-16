import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";

export const ButtonCarrito = ({ product, cantidad }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <button
        className={`${"bg-blue-600  text-gray-100"} w-full h-[40px] rounded-md mt-2`}
        onClick={() => addToCart(product, cantidad)}
      >
        Comprar
      </button>
    </div>
  );
};
