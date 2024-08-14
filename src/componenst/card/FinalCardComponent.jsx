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
    <div className="card bg-white p-4 w-[300px] h-[400px] rounded-md transition-transform duration-300 flex flex-col justify-between m-2">
    <div>
      <div className="title text-blue-900">{title}</div>
      <div>
        <img src={image} alt={title} className="cardImg w-[100px] ml-[90px]" />
      </div>
      <p className="card-descripcion text-black text-center overflow-hidden text-ellipsis">
        {description}
      </p>
      <p className="card-price-add text-black flex items-center justify-between">{price}</p>
      <button
        className={`${
          isAdded ? 'bg-black text-gray-100' : 'bg-black text-gray-100'
        } w-[250px] h-[30px] rounded-md ml-2`}
        onClick={onAddProduct}
      >
        {isAdded ? 'Agregado' : 'Comprar'}
      </button>
    </div>
  </div>
  
  );
};
