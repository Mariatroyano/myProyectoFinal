import { HeaderComponent } from "../header/HeaderComponent";
import React, { useEffect, useState } from "react";
import MainScreen from "../screen/MainScreen";
import Search from "../search/search";
import { useFetch } from "../..";
import "../../index.css";
import Footer from "../Footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import { useNavigate } from "react-router-dom";

function App({ Logeado = false, setLogeado }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Usuario, setUsuario] = useState(null);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
        return navigate("/login");
      }
    });
  }, []);
  return (
    <>
      {Usuario && (
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
      )}
    </>
  );
}

export default App;
