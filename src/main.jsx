import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Router/Routers";
import { CartProvider } from "./context/contextCarrito/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {/*el provider  es el que me permite utilizar el contexto del todo el carrito */}
      <Routers />
      {/*todas las rutas de los enpoins q manejo*/}
    </CartProvider>
  </React.StrictMode>
);
