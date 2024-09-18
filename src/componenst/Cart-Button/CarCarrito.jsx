import React, { useContext } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";
import { useNavigate } from "react-router-dom";
import routes from "../../common/routes-constants";

export const CartCarrito = ({ onClose }) => {
  const navigate = useNavigate();
  const { Productoscart, deleteProduct } = useContext(CartContext);
  const totalProducts = Productoscart?.reduce(
    (total, item) => total + item.cantidad,
    0
  );
  const sendDataCart = () => {
    navigate(routes.FACTURA, {
      state: { productos: Productoscart },
    });
  };
  return (
    <div
      style={{ margin: 0 }}
      className="fixed left-0 top-0  z-10 h-[100vh] w-[100vw] bg-black bg-opacity-70 overflow-auto "
    >
      <div className="bg-white mx-auto my-16 p-6 border border-gray-300 w-11/12 md:w-4/5 max-w-3xl rounded-lg shadow-lg">
        <span
          className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-5xl font-semibold mb-12 text-black font-serif text-center">
          Carrito de Compras
        </h2>
        {Productoscart?.length === 0 ? (
          <p className="text-black text-2xl font-serif">
            Tu carrito de Eleganza está vacío.
          </p>
        ) : (
          <ul className="space-y-4 mb-6">
            {Productoscart?.map((item) => (
              <li
                key={item.id}
                className="flex items-center border border-violet-600 p-4 rounded-md shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                />
                <div className="flex-1">
                  <div className="text-lg font-medium text-black">
                    {item.title}
                  </div>
                  <div className="text-gray-600">${item.price}</div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-black">
                    {item.cantidad}
                  </span>
                </div>
                <button
                  className="text-white bg-red-500 rounded-md px-4 py-2 ml-4"
                  onClick={() => deleteProduct(item)}
                >
                  ✘
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-6">
          <div className="flex-1">
            <input
              type="text"
              value={`Total productos: ${totalProducts}`}
              readOnly
              className="w-full px-4 py-2 border border-violet-600 rounded-md text-lg font-medium text-black"
            />
          </div>
          <button
            className="ml-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
            onClick={sendDataCart}
          >
            Comprar Productos
          </button>
        </div>
      </div>
    </div>
  );
};
