import React from "react";
import "./CartModalComponent.css";
import useCartStore from "../../store/cart/useCartStore";

export const CartModalComponent = ({  onClose }) => {
  const Products = useCartStore(state=>state.cart)

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        {Products .length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {Products.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} className="modal-item-img" />
                <div>{item.title}</div>
                <div>{item.price}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
