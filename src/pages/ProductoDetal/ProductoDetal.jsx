import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetall } from "../../componenst/card/CardDetall";
import { HeaderComponent } from "../../componenst/header/HeaderComponent";

export default function ProductoDetal() {
  const { id } = useParams();
  const [Producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5814/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      });
  }, [id]);

  return (
    <>
      <HeaderComponent />
      <div>
        <CardDetall {...Producto} />
      </div>
    </>
  );
}
