import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-2xl shadow-xl p-8">
        <h2 className="text-gray-800 text-3xl font-bold text-center mb-8">
          Crear Cuenta
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor="nombres">
              Nombres:
            </label>
            <input
              id="nombres"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor="apellidos">
              Apellidos:
            </label>
            <input
              id="apellidos"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor="edad">
              Edad:
            </label>
            <input
              id="edad"
              type="number"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105"
          >
            Registrarse
          </button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
