import React, { useState } from "react";

export default function Formulario() {
  const [activo, setActivo] = useState(false);

  return (
    <>
      <button
        className="text-gray-200 bg-gray-800 w-24 h-24 absolute top-8 right-5"
        onClick={() => setActivo(true)}
      >
        Iniciar Sesion
      </button>
      {activo && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div
            className="absolute inset-0 bg-gray-700 opacity-70"
            onClick={() => setActivo(false)}
          />
          <div className="flex flex-col items-center w-1/3 h-9/10 bg-gray-100 rounded-3xl z-40">
            <h1 className="text-black">Registrarse</h1>
            <form className="flex flex-col items-center w-full p-4">
              <input
                className="mb-4 p-2 border border-gray-300 rounded"
                type="email"
                placeholder="Email o numero celular"
              />
              <input
                className="mb-4 p-2 border border-gray-300 rounded"
                type="password"
                placeholder="Contraseña"
              />
              <button
                type="button"
                className="mb-4 p-2 bg-gray-600 text-white rounded"
              >
                Iniciar Sesión
              </button>
              <a
                className="text-center text-blue-500"
                href="Olvidaste la contraseña?"
              >
                Olvidaste la contraseña?
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
