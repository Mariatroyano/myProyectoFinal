import React from "react";
import useCartStore from "../../store/cart/useCartStore";

export const CartModalComponent = ({ onClose }) => {
  const { cart, removeItem } = useCartStore(state => ({
    cart: state.cart,
    removeItem: state.removeItem,
  }));

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-40 overflow-auto">
      <div className="bg-white mx-auto my-16 p-6 border border-gray-300 w-11/12 md:w-4/5 max-w-3xl rounded-lg shadow-lg">
        <span
          className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4 text-black">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className=" text-black">No hay productos en el carrito.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                <div className="relative w-16 h-16">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium text-black">{item.title}</div>
                  <div className="text-gray-600">{item.price}</div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 font-bold"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
