
import "./FinalCardComponent.css";

export const FinalCardComponent = ({
  TITULO,
  PRECIO,
  DESCRIPCION,
  IMAGEN,
  isAdded,
  onAddProduct
 
}) => {

  return (
    <div className="card">
      <div className="title">{TITULO}</div>
      <div>
        <img src={IMAGEN} alt={TITULO} className="cardImg" />
      </div>
      <div className="card-descripcion">{DESCRIPCION}</div>
      <div className="card-price-add">{PRECIO}</div>
      <button
        className={isAdded ? "remove-item-btn" : "add-item-btn"}
        onClick={onAddProduct}
      >
        {isAdded ? "Agregado" : "Agregar"}
      </button>
    </div>
  );
};

