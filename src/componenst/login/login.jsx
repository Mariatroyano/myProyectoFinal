import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, providerGogle } from "../../fireBase/credenciales";
import { signInWithPopup } from "firebase/auth";

export default function Formulario({ Logeado, setLogeado }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFirst(true);
    setLogeado(true);
    navigate("/products");
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, providerGogle);
      setLogeado(true);
      navigate("/products");
    } catch (error) {
      console.error("Error al iniciar con Google:", error);
      alert("Hubo un problema al iniciar sesión con Google. Por favor, intenta nuevamente.");
    }
  };

  return (
    <>
      <div className="bg-white absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-30">
        <div className="flex items-center w-1/3 h-5/6 bg-[#EFF8F6] rounded-[60px] z-50 flex-col justify-center">
          <h1 className="text-black text-center mb-6">
            ¡Hola! Para agregar al <br />
            carrito, ingresa a tu cuenta
          </h1>
          <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="submit" className="bg-[#0067B8] text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-700 transition">
              Ingresar
            </button>
          </form>
          {first && (
            <Link to="/products" className="mb-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                Ver Productos
              </button>
            </Link>
          )}
          <div className="text-center">
            <p className="mb-2 text-gray-950">
              ¿No Tienes Cuenta?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Crear Cuenta
              </Link>
            </p>
            <button
              onClick={handleGoogleSignIn}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
