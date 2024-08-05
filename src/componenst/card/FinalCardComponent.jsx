
import "./FinalCardComponent.css";

export const FinalCardComponent = ({
  title,
  price,
  description,
  image,
  isAdded,
  onAddProduct
 
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

// import "./FinalCardComponent.css";

// export const FinalCardComponent = ({
//   title,
//   price,
//   description,
//   image,
//   isAdded,
//   onAddProduct
 
// }) => {

//   return (
//     <div className="card">
//       <div className="title">{title}</div>
//       <div>
//         <img src={image} alt={title} className="cardImg" />
//       </div>
//       <div className="card-descripcion">{description}</div>
//       <div className="card-price-add">{price}</div>
//       <button
//         className={isAdded ? "remove-item-btn" : "add-item-btn"}
//         onClick={onAddProduct}
//       >
//         {isAdded ? "Agregado" : "Agregar"}
//       </button>
//     </div>
//   );
// };
