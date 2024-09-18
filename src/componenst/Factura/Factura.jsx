import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../common/routes-constants";
import { useContext } from "react";
import { CartContext } from "../../context/contextCarrito/CartContext";
import { auth } from "../../fireBase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Factura = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productos = [], usuario = {} } = location.state || {};
  const [Usuario, setUsuario] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
        setTimeout(() => {
          return navigate(routes.LOGING);
        }, 0);
      }
    });
  }, []);

  const { deleteAllProductsCart } = useContext(CartContext);
  const fechaPedido = Date.now();
  const fechaActual = new Date(fechaPedido).toLocaleDateString(); //pa convertir una fecha en formato cadena

  const totalPrice = () => {
    return productos.reduce((total, producto) => {
      return total + producto.cantidad * producto.price;
    }, 0);
  };

  const priceTotal = totalPrice();

  const regresarPaginaPrincipal = () => {
    navigate(routes.PRODUCTS);
  };

  const guardarFacturaEnDB = async () => {
    try {

      const facturaData = {
        UID_Usuario: Usuario.uid,
        FechaPedido: fechaPedido,
        PrecioTotal: priceTotal,
        ID_Productos: productos.map((producto) => ({
          id: producto.id,
          cantidad: producto.cantidad,
          precio: producto.price,
        })),
      };

      const response = await fetch("http://localhost:3000/facturaVentas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(facturaData),
      });

      if (response) {
        console.log("Factura guardada exitosamente en la base de datos");
      } else {
        console.log("Error al guardar la factura en la base de datos");
      }
    } catch (error) {
      console.error("Error en la petición para guardar la factura:", error);
    }
  };

  const buyProducts = async () => {
    await guardarFacturaEnDB(); 
    deleteAllProductsCart(); 
    navigate("/products");
  };
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
        <h1 className="text-2xl font-bold">Factura</h1>
      </div>
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Nombre del cliente:
        </h2>
        {Usuario ? (
          Usuario.displayName ? (
            <p className="text-lg text-gray-600">{Usuario.displayName}</p>
          ) : (
            <p className="text-lg text-gray-600">{Usuario.email}</p>
          )
        ) : (
          <p className="text-lg text-gray-600 italic">
            No hay información de usuario
          </p>
        )}
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

        <div className="flex justify-between w-full mt-4">
          <div className="text-center">
            <button
              onClick={regresarPaginaPrincipal}
              className="bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300"
            >
              Regresar a la Página Principal
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={buyProducts}
              className="bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factura;
