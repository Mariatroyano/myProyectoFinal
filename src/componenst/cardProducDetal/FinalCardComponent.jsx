import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";

export const FinalCardComponent = ({
  title,
  price,
  description,
  image,
 
  product,
}) => {
  const Cantidad = 1;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card bg-white p-4 w-[300px] h-[400px] rounded-md shadow-lg transition-transform duration-300 flex flex-col justify-between m-2">
      <div className="flex flex-col h-full">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="max-w-[150px] max-h-[150px]  rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="title text-blue-900 text-xl font-semibold mb-2 truncate">
            {title}
          </h3>
          <p className="card-descripcion text-black text-center text-sm overflow-hidden truncate mb-2">
            {description}
          </p>
          <p className="card-price-add text-black text-center text-lg font-bold mb-4">
            {price}
          </p>
        </div>

        <button
          className={`${"bg-blue-600  text-gray-100"} w-full h-[40px] rounded-md mt-2`}
          onClick={() => addToCart(product, Cantidad)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
