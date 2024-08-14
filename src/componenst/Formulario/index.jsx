import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-black flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md bg-[#D6E3E3] rounded-lg shadow-lg p-8 z-50">
        <h2 className="text-[#111315] text-2xl font-bold text-center mb-6">
          Registro
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-[#17191B] mb-2" htmlFor="nombres">
              Nombres:
            </label>
            <input
              id="nombres"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-zinc-950"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#17191B] mb-2" htmlFor="apellidos">
              Apellidos:
            </label>
            <input
              id="apellidos"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none  text-zinc-950"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#17191B] mb-2" htmlFor="edad">
              Edad:
            </label>
            <input
              id="edad"
              type="number"
              required
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none  text-zinc-950"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#17191B] mb-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none  text-zinc-950"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#17191B] mb-2" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              required
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none  text-zinc-950"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  text-zinc-950"
          >
            Registrarse
          </button>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/products"
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500  text-zinc-950"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

// export Register;
