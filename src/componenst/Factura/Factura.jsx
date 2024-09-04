import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Factura = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productos } = location.state || { productos: [] };

  const fechaPedido = Date.now();
  const fechaActual = new Date(fechaPedido).toLocaleDateString();

  const totalPrice = () => {
    return productos.reduce((total, producto) => {
      return total + producto.cantidad * producto.price;
    }, 0);
  };

  const priceTotal = totalPrice();

  const regresarPaginaPrincipal = () => {
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
        <h1 className="text-2xl font-bold">Factura</h1>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">Usuario:</p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Fecha del Pedido:
          </p>
          <p className="text-gray-900 text-base">{fechaActual}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">Productos:</p>
          <ul className="list-disc pl-5 space-y-2">
            {productos.map((producto) => (
              <li key={producto.id} className="text-gray-800 text-base">
                <span className="font-medium">{producto.title}</span> - $
                {producto.price} x {producto.cantidad}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Precio Total:
          </p>
          <p className="text-gray-900 text-2xl font-bold">
            ${priceTotal.toFixed(2)}
          </p>
        </div>

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
  );
};

export default Factura;
