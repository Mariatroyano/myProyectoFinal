import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../common/routes-constants";
import { ButtonCarrito } from "./ButtonCarrito";

export const CardDetall = ({
  title,
  price,
  description,
  image,
  id,
  Producto,
  onAddProduct,
  isAdded,
  onRemoveProduct,
  quantity,
  onSelectQuantity,
}) => {
  const navigate = useNavigate();

  console.log(Producto);

  const regresarPaginaPrincipal = () => {
    navigate(routes.PRODUCTS);
  };

  return (
    <div className="flex justify-center items-center min-h-screen from-teal-800 via-blue-300 to-purple-600">
      <div className="bg-white p-8 w-full max-w-4xl rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 flex">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between p-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">{title}</h3>
          <p className="text-gray-700 text-lg mb-6">{description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-8">${price}</p>
          <div className="flex justify-between items-center mb-4">
            {/* <button
              className={`${
                isAdded
                  ? "bg-gray-700 text-gray-200"
                  : "bg-green-600 text-white"
              } py-2 px-6 rounded-lg transition-transform transform hover:scale-105`}
              onClick={onAddProduct}
            >
              {isAdded ? "Agregado" : "Agregar al Carrito"}
            </button> */}
            <ButtonCarrito id={id} cantidad={1} />
            <div className="text-center space-y-4">
              <button
                onClick={regresarPaginaPrincipal}
                className="bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300"
              >
                Regresar a la Página Principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
