import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetall } from "../../componenst/cardProducDetal/CardDetall";
import { HeaderComponent } from "../../componenst/header/HeaderComponent";

export default function ProductoDetal() {
  const { id } = useParams();
  const [Producto, setProducto] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [productsFiltrados, setProductsFiltrados] = useState([]);

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      });
  }, [id]);

  return (
    <>
      <HeaderComponent
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        setProductsFiltrados={setProductsFiltrados}
      />
      <CardDetall {...Producto} Producto={Producto} />
    </>
  );
}
