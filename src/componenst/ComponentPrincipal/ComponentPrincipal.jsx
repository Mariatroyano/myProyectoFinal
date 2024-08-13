import "./ComponentePrincipal.css";

export const ComponentPrincipal = ({ title, image, price }) => {
  return (
    <div className="Principal">
      <div>
        <div className="title">{title} </div>
        <div className="w-25 h-34">
          <img src={image} alt={title} className="cardImgPrincipal" />
          <p className="card-price-add text-black">${price}</p>
        </div>
      </div>
    </div>
  );
};
