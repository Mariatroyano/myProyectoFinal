import { HeaderComponent } from "../header/HeaderComponent";
import React, { useState } from "react";
import MainScreen from "../screen/MainScreen";
import Search from "../search/search";
import { useFetch } from "../..";
import "../../index.css";
import Footer from "../Footer/Footer";

function App({ Logeado = false, setLogeado }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <>
      {Logeado ? (
        <>
          <HeaderComponent
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
         

          <MainScreen />
         
        </>
      ) : (
        <h1>Error..No Te Encuentras Logeado </h1>
      )}
      
    </>
  );
}

export default App;
