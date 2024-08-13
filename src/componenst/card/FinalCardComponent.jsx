import "./FinalCardComponent.css";

export const FinalCardComponent = ({
  title,
  price,
  description,
  image,
  isAdded,
  onAddProduct,
}) => {
  return (
    <div className="card">
      <div >
        <div className="title">{title}</div>
        <div>
          <img src={image} alt={title} className="cardImg" />
        </div>
        <p className="card-descripcion text-black">{description} </p>
        <p className="card-price-add text-black">{price}</p>
        <button
          className={isAdded ? "remove-item-btn" : "add-item-btn"}
          onClick={onAddProduct}
        >
          {isAdded ? "Agregado" : "Comprar"}
        </button>
      </div>
    </div>
  );
};
