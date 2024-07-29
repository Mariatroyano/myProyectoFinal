import React from "react";
import "./CartModalComponent.css";

export const CartModalComponent = ({ items, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        {items.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {items.map((item) => (
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
