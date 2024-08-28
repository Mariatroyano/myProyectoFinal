import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Router/Routers";
import { CartProvider } from "./context/contextCarrito/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Routers />
    </CartProvider>
  </React.StrictMode>
);
