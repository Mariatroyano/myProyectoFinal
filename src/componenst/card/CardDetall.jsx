import React from "react";

export const CardDetall = ({
  title,
  price,
  description,
  image,
  category,
  onAddProduct,
  isAdded,
  onRemoveProduct,
  quantity,
  onSelectQuantity,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
            <button
              className={`${
                isAdded
                  ? "bg-gray-700 text-gray-200"
                  : "bg-green-600 text-white"
              } py-2 px-6 rounded-lg transition-transform transform hover:scale-105`}
              onClick={onAddProduct}
            >
              {isAdded ? "Agregado" : "Agregar al Carrito"}
            </button>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
              onClick={onRemoveProduct}
            >
              Eliminar
            </button>
          </div>
          <div className="flex justify-center w-full mt-4">
            <select
              value={quantity}
              onChange={(e) => onSelectQuantity(e.target.value)}
              className="bg-gray-200 text-gray-800 w-24 py-2 rounded-lg text-center shadow-inner"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
