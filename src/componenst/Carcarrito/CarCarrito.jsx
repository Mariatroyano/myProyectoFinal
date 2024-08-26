import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartModalComponent = ({ onClose }) => {
  const { Productoscart } = useContext(CartContext);
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-40 overflow-auto">
      <div className="bg-white mx-auto my-16 p-6 border border-gray-300 w-11/12 md:w-4/5 max-w-3xl rounded-lg shadow-lg">
        <span
          className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Carrito de Compras
        </h2>
        {Productoscart.length === 0 ? (
          <p className="text-black">No hay productos en el carrito.</p>
        ) : (
          <ul className="space-y-20">
            {Productoscart.map((item) => (
              <li
                key={item.id}
                className="flex items-center border-2 border-[var(--softer-color)] p-4 rounded-md relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain rounded-md -mt-16 mr-4"
                />
                <div className="flex-1">
                  <div className="text-lg font-medium text-black">
                    {item.title}
                  </div>
                  <div className="text-gray-600">${item.price}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-black">
                    {item.quantity}
                  </span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-white bg-red-500 rounded-md px-4 py-2 ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  ✘
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
