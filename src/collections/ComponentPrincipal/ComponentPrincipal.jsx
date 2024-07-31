
export const ComponentPrincipal = ({
  title,
  image,

 
}) => {

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="w-24 h-24 animate-bounce" >
        <img src={image} alt={title} />
      </div>

    </div>
  );
};