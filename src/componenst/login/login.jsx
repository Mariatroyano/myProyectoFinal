import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, providerGogle } from "../../fireBase/credenciales";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Formulario({ Logeado, setLogeado }) {
  const [first, setFirst] = useState(false);
  const [registrar, setRegistar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        navigate("/products");
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
      }
    });
  }, [navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const usarioCredenciales = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = usarioCredenciales.user;
    try {
      await fetch("http://localhost:3000/Usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UID_Usuario: uid, Email: email }),
      });
    } catch (error) {
      console.log("Error al registrar cuenta", error);
    }
    try {
      await fetch("http://localhost:3000/carritoCompras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Productos: [], UID_Usuario: uid }),
      });
    } catch (error) {
      console.log("Error al crear carrito de compras", error);
    }

    setFirst(true);
    setLogeado(true);
    navigate("/products");
  };

  const IngresarUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Ingresaste a la cuenta");
    } catch (error) {
      console.log("Error al ingresar a la cuenta", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, providerGogle);
      setLogeado(true);
      navigate("/products");
    } catch (error) {
      console.error("Error al iniciar con Google:", error);
      alert(
        "Hubo un problema al iniciar sesión con Google. Por favor, intenta nuevamente."
      );
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-30 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600">
        <div className="flex flex-col items-center w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
          <h1 className="text-2xl font-bold text-black text-center mb-6">
            ¡Hola! Para agregar al <br />
            carrito, ingresa a tu cuenta
          </h1>
          <form
            onSubmit={(e) => {
              registrar ? handleFormSubmit(e) : IngresarUser(e);
            }}
            className="w-full flex flex-col items-center"
          >
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#0067B8] text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition"
            >
              {registrar ? "Registrar" : "Ingresar"}
            </button>
            <button
              type="button"
              onClick={() => setRegistar(!registrar)}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg mb-4 hover:bg-gray-200 transition"
            >
              {registrar
                ? "¿Ya tienes cuenta? Ingresar"
                : "¿No tienes cuenta? Regístrate"}
            </button>
          </form>
          {first && (
            <Link to="/products" className="w-full">
              <button className="w-full bg-green-500 text-white py-3 rounded-lg mb-4 hover:bg-green-700 transition">
                Ver Productos
              </button>
            </Link>
          )}
          <div className="text-center w-full">
            <p className="mb-2 text-gray-600">
              ¿No Tienes Cuenta?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Crear Cuenta
              </Link>
            </p>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-700 transition"
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
