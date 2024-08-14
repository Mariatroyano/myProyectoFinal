import React from "react";
import imagen from "../../../public/carrito.png";
import useCartStore from "../../store/cart/useCartStore";

export const CartButtonComponent = ({ onCartClick }) => {
  const countProducts = useCartStore((state) => state.cart.length);
  return (
    <button className="bg-[#f3efef] border border-[#ccc] p-2 cursor-pointer rounded-full h-[50px] w-[200px] relative top-[6px] right-[16px]" onClick={onCartClick}>
      <img className="w-[10%] h-[50%] absolute top-0 left-0" src={imagen} alt="Cart" />
      <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute top-[5px] left-[80px]">{countProducts}</span>
    </button>
  );
};
