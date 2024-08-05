import React from "react";
import { useEffect, useState } from "react";
import "./Formulario.css";
import { Link, Outlet } from "react-router-dom";
import { auth, providerGogle } from "../../fireBase/credenciales";
import { signInWithPopup } from "firebase/auth";

export default function Formulario({ Logeado, setLogeado }) {
  const [first, setfirst] = useState(false);
  const FuncionSubmit = (e) => {
    e.preventDefault();
    console.log(true);
    setfirst(true);
    setLogeado(true);
  };

  const iniciarGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGogle);
    } catch (error) {
      console.error("Error al iniciar con google", error);
    }
  };
  return (
    <>
      {
        <div className="body-div">
          <div className="form-container">
            <h1>¡Hola! Para agregar al <br />carrito, 
            ingresa a tu cuenta</h1>

            <form onSubmit={(e) => FuncionSubmit(e)} className="form">
              
              <button type="submit" className="button">
                Ingresar
              </button>
            </form>
            {first && (
              <Link to="/products">
                <button>Products</button>
              </Link>
            )}
            <div>
              <p>
                ¿No Tienes Cuenta?<Link to='/register'>Crear Cuenta</Link>
              </p>
            </div>
          </div>
          <button onClick={iniciarGoogle}>Iniciar sesión con Google</button>
        </div>
      }
      <Outlet />
    </>
  );
}
