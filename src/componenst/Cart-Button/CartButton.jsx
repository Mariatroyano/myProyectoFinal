import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import imagen from "../../../public/carrito.png";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    eliminarProductoCantidad,
  } = useContext(CartContext);

  return (
    <div>
      <button
        className="bg-[#f3efef] border border-[#ccc] p-2 cursor-pointer rounded-full relative flex items-center justify-center w-16 h-16"
        onClick={onCartClick}
      >
        <img className="w-10 h-10" src={imagen} alt="Cart" />
        {countProducts > 0 && (
          <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {countProducts}
          </span>
        )}
      </button>

      {cart.map((product, idx) => (
        <div key={idx}>
          {product && (
            <div style={{ border: "1px solid", background: "#909090" }}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              {product.quantity > 1 && (
                <button onClick={() => eliminarProductoCantidad(product.id)}>
                  Eliminar uno solo
                </button>
              )}
              <button onClick={() => removeFromCart(product)}>
                Eliminar todos los productos del carrito
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
