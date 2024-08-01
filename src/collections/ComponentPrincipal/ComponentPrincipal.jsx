
export const ComponentPrincipal = ({
  title,
  image,

 
}) => {

  return (
    <div >
      <div className="title">{title}</div>
      <div className="w-34 h-50" >
        <img src={image} alt={title} />
      </div>

    </div>
  );
};