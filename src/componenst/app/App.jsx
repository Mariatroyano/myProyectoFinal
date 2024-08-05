import { HeaderComponent } from "../header/HeaderComponent";
import React, { useState } from "react";
import MainScreen from "../screen/MainScreen";
import Search from "../search/search";
import { useFetch } from "../..";
import "../../index.css";

function App({ Logeado = false, setLogeado }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const {
  //   data: products,
  //   loading,
  //   error,
  // } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      {Logeado ? (
        <>
          <HeaderComponent
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
          {/* <div className="nav-right">
              <Search products={products} />
            </div> */}

          <MainScreen />
        </>
      ) : (
        <h1>Error..No Te Encuentras Logeado </h1>
      )}
    </>
  );
}

export default App;
