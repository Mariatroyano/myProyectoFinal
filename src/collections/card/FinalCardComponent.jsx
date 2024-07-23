import React, { useState, useEffect } from "react";
import "./FinalCardComponent.css";

export const FinalCardComponent = ({
  nombreProducto,
  precio,
  descripcion,
  icon,
  product,
  addedItems,
  addItem,
  removeItem,
}) => {
  const [isAdded, setIsAdded] = useState(true);

  useEffect(() => {
    const item = addedItems.filter((addedItem) => addedItem.id === product.id);
    setIsAdded(item.length === 0);
  }, [addedItems, product]);

  return (
    <div className="card">
      <div className="title">{nombreProducto}</div>
      <div>
        <img src={icon} alt={nombreProducto} className="cardImg" />
      </div>
      <div className="card-descripcion">{descripcion}</div>
      <div className="card-price-add">{precio}</div>
      <button
        className={isAdded ? "add-item-btn" : "remove-item-btn"}
        onClick={() => {
          isAdded ? addItem(product) : removeItem(product);
          setIsAdded(!isAdded);
        }}
      >
        {isAdded ? "ADD" : "CANCEL"}
      </button>
    </div>
  );
};
