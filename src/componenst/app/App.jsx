import { HeaderComponent } from "../header/HeaderComponent";
import React, { useEffect, useState } from "react";
import MainScreen from "../screen/MainScreen";
import "../../index.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import { useNavigate } from "react-router-dom";
import routes from "../../common/routes-constants";

function App({ Logeado = false, setLogeado }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Usuario, setUsuario] = useState(null);
  const [productsFiltrados, setProductsFiltrados] = useState([]);
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
        setTimeout(() => {
          return navigate(routes.LOGING);
        }, 0);
      }
    });
  }, []);
  return (
    <>
      <>
        {Logeado ? (
          <>
            <HeaderComponent
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
              setProductsFiltrados={setProductsFiltrados}

            />

            <MainScreen productsFiltrados={productsFiltrados}  />
          </>
        ) : (
          <h1>Error..No Te Encuentras Logeado </h1>
        )}
      </>
    </>
  );
}

export default App;
