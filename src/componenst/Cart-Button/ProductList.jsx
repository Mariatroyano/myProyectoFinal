import React, { useContext, useEffect, useState } from "react";
import imagen from "../../../public/carrito.png";
import { CartContext } from "../../context/CartContext";

export const CartButtonComponent = ({ onCartClick }) => {
  const { Productoscart } = useContext(CartContext);
  const [Productoslength, setProductoslength] = useState(0);

  useEffect(() => {
    setProductoslength(Productoscart.length);
  }, [Productoscart]);

  return (
    <button
      className="bg-[#f3efef] border border-[#ccc] p-2 cursor-pointer rounded-full relative flex items-center justify-center w-16 h-16"
      onClick={onCartClick}
    >
      <img className="w-10 h-10" src={imagen} alt="Cart" />
        <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {Productoslength}
        </span>
    </button>
  );
};
