import React, { useState } from 'react'

// const tallas




export const CardDetall = ({
    title,
    price,
    description,
    image,
    category,
    isAdded,
    onAddProduct,
    onRemoveProduct,
    quantity,
    onSelectQuantity,
  }) => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-white p-4 w-[800px] h-[500px] rounded-md shadow-lg transition-transform duration-300 flex flex-col justify-between m-2">
          <div className="flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <img
                src={image}
                alt={title}
                className="max-w-[150px] max-h-[150px] rounded-md"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="title text-blue-900 text-xl font-semibold mb-2 truncate justify-center items-center">
                {title}
              </h3>
              <p className="card-descripcion text-black text-center text-sm overflow-hidden">
                {description}
              </p>
              <p className="card-price-add text-black text-center text-lg font-bold mb-4">
                {price}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button
                className={`${
                  isAdded ? 'bg-gray-800 text-gray-200' : 'bg-black text-gray-100'
                } w-[45%] h-[32px] rounded-md mt-2 text-sm`}
                onClick={onAddProduct}
              >
                {isAdded ? 'Agregado' : 'AGREGAR AL CARRITO'}
              </button>
            
            </div>
            <div className="flex justify-center items-center mt-4">
              <select
                value={quantity}
                onChange={(e) => onSelectQuantity(e.target.value)}
                className="bg-gray-300 text-black w-[10%] h-[42px] rounded-md text-sm text-center"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
                className="bg-red-500 text-white w-[45%] h-[32px] rounded-md mt-2 text-sm"
                onClick={onRemoveProduct}
              >
                Eliminar
              </button>
          </div>
        </div>
      </div>
    );
  };
  