import React from "react";
import { useEffect, useState } from "react";
import "./Formulario.css";
import { Link, Outlet } from "react-router-dom";

export default function Formulario({ Logeado, setLogeado }) {
  const [first, setfirst] = useState(false);
  const FuncionSubmit = (e) => {
    e.preventDefault();
    console.log(true);
    setfirst(true);
    setLogeado(true);
  };
  return (
    <>
      {
        <div className="body-div">
          <div className="form-container">
            <h1>Iniciar Sesión</h1>

            <form onSubmit={(e) => FuncionSubmit(e)} className="form">
              <input
                className="input"
                type="email"
                placeholder="Email o numero celular"
              />
              <br />
              <br />
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
              />
              <br />
              <br />
              <button type="submit" className="button">
                Iniciar Sesión
              </button>
            </form>
            {first && (
              <Link to="/products">
                <button>Products</button>
              </Link>
            )}
          </div>
        </div>
      }
      <Outlet />
    </>
  );
}
