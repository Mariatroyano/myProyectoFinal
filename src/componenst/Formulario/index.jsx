import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, providerGogle } from "../../fireBase/credenciales";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [nombres, setNombres] = useState("");
  // const [lastname, setLastname] = useState("");
  const [Telefono, setTelefono] = useState("");
  // const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const usarioCredenciales = await createUserWithEmailAndPassword(
      auth,
      email,
      nombres,
      Telefono,
      password,
      direccion

    );
    const { uid } = usarioCredenciales.user;
    try {
      await fetch("http://localhost:3000/Usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UID_Usuario: uid,
          Email: email,
          Nombre: nombres,
          Telefono: Telefono,
          Direccion:direccion,
        }),
      });
      console.log("Usuario creado en la base de datos ");
    } catch (error) {
      console.log("Error al registrar cuenta", error);
    }
    try {
      await fetch("http://localhost:3000/carritoCompras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Productos: [], UID_Usuario: uid }),
      });
      console.log("Usuario creado en la base de datos ");
    } catch (error) {
      console.log("Error al crear carrito de compras", error);
    }
    navigate("/products");
  };

  return (
    <div className="bg-gradient-to-br from-teal-800 via-blue-300 to-purple-600 flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-3xl shadow-lg p-8">
        <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-8">
          Crear Cuenta
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="nombres"
            >
              Nombres
            </label>
            <input
              id="nombres"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese sus nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="apellidos"
            >
              Apellidos
            </label>
            <input
              id="apellidos"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese sus apellidos"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div> */}

          <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="Direción"
            >
              Dirección
            </label>
            <input
              id="Direccion"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese su Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="Telefono"
            >
              Telefono
            </label>
            <input
              id="Telefono"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese su Teloefono"
              value={Telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          {/* <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="edad"
            >
              Edad
            </label>
            <input
              id="edad"
              type="number"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese su edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div> */}
          <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-teal-300 focus:outline-none"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105"
            onClick={handleFormSubmit}
          >
            Registrarse
          </button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          >
            Ya tengo cuenta. Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
