import React from "react";
import { useNavigate } from "react-router-dom";

export const ComponentPrincipal = ({ title, image, price, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className="bg-white p-4 w-72 h-96 rounded-lg border border-gray-300 shadow-lg flex flex-col justify-between m-4 cursor-pointer hover:shadow-2xl transition-shadow duration-200 ease-in-out"
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-blue-800 text-center mb-2">
          {title}
        </h2>
        <p className="text-lg font-bold text-black">${price}</p>
      </div>
    </div>
  );
};
