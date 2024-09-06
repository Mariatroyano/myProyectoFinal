import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";

export const ButtonCarrito = ({ id, cantidad }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <button
        className={`${
          isAdded ? "bg-gray-800 text-gray-200" : "bg-blue-600  text-gray-100"
        } w-full h-[40px] rounded-md mt-2`}
        onClick={() => addToCart(id, cantidad)}
      >
        {isAdded ? "Agregado" : "Comprar"}
      </button>
    </div>
  );
};
