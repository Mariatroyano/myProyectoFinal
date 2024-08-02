import React from "react";
import { useEffect, useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [activo, setActivo] = useState(false);

  return (
    <>
      <button
        className="iniciar-sesion"
        onClick={(e) => {
          setActivo(true);
        }}
      >
        Iniciar Sesion
      </button>
      {activo && (
        <div className="body-div">
          <div
            className="button-modal"
            onClick={(e) => {
              setActivo(false);
            }}
          />

          <div className="form-container">
            <h1>Registrarse</h1>

            <form className="form">
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
              <button type="button" className="button">
                Iniciar Sesión
              </button>
              <br />
              <br />
              <a className="text-align-center" href="Olvidaste la contraseña?">
                Olvidaste la contraseña?
              </a>
              <br />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
