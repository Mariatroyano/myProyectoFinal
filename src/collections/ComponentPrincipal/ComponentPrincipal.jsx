
export const ComponentPrincipal = ({
  title,
  image,

 
}) => {

  return (
    <div >
      <div className="title">{title}</div>
      <div className="w-25 h-34" >
        <img src={image} alt={title} />
      </div>

    </div>
  );
};