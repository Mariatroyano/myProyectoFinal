// import React, { useState, useEffect } from "react";
// import "./FinalCardComponent.css";

// export const FinalCardComponent = ({
//   title,
//   price,
//   description,
//   image,
//   addItem,
//   removeItem,
// }) => {
//   const [isAdded, setIsAdded] = useState(true);
//   const [addedItems] = useState([]);

//   useEffect(() => {
//     const item = addedItems.filter((addedItem) => addedItem.id === product.id);
//     setIsAdded(item.length === 0);
//   }, [addedItems]);

//   return (
//     <div className="card">
//       <div className="title">{title}</div>
//       <div>
//         <img src={image} alt={title} className="cardImg" />
//       </div>
//       <div className="card-descripcion">{description}</div>
//       <div className="card-price-add">{price}</div>
//       <button
//         className={isAdded ? "add-item-btn" : "remove-item-btn"}
//         onClick={() => {
//           isAdded ? addItem(product) : removeItem(product);
//           setIsAdded(!isAdded);
//         }}
//       >
//         {isAdded ? "Agregar " : "CANCLE"}
//       </button>
//     </div>
//   );
// };
import "./FinalCardComponent.css";

export const FinalCardComponent = ({
  title,
  price,
  description,
  image,
  isAdded,
  onAddProduct
  // addItem,
  // addedItems,
}) => {

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div>
        <img src={image} alt={title} className="cardImg" />
      </div>
      <div className="card-descripcion">{description}</div>
      <div className="card-price-add">{price}</div>
      <button
        className={isAdded ? "remove-item-btn" : "add-item-btn"}
        onClick={onAddProduct}
      >
        {isAdded ? "Agregado" : "Agregar"}
      </button>
    </div>
  );
};
