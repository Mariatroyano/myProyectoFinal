import React from "react";

export const ComponentPrincipal = ({ title, image, price }) => {
  return (
    <div className="bg-white p-4 w-72 h-96 rounded-lg  border-[#7e6161] shadow-lg flex flex-col justify-between m-2">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-30 h-40 object-cover  mb-1"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h2>
        <p className="text-lg font-bold text-gray-600">${price}</p>
      </div>
    </div>
  );
};
