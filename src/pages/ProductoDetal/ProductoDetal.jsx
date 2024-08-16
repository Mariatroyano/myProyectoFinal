import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetall } from "../../componenst/card/CardDetall";

export default function ProductoDetal() {
  const { id } = useParams();
  const [Producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5813/${id - 1}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      });
  }, [id]);
  console.log(Producto);

  return (
    <div>
      <CardDetall {...Producto} />
    </div>
  );
}
