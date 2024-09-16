import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, providerGogle } from "../../fireBase/credenciales";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import routes from "../../common/routes-constants";

export default function Formulario({ Logeado, setLogeado }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); //es para ir a una ruta en especifica sin recargar la pagina

  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        navigate(routes.PRODUCTS);
      } else {
        console.log("No hay usuario logeado");
      }
      // setLoading(false);
    });
  }, []);

  const IngresarUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); //es para poder ingresar a mi cuenta ya creada en fire
      console.log("Ingresaste a la cuenta");
      navigate(routes.PRODUCTS);
    } catch (error) {
      console.log("Error al ingresar a la cuenta", error);

      if (error.code === "auth/user-not-found") {
        //un error que estad ya ´proporcionado de firebase
        setErrorMessage(
          "El usuario no está registrado. Por favor, regístrate."
        );
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Contraseña incorrecta. Inténtalo nuevamente.");
      } else {
        setErrorMessage(
          "Ocurrió un error al iniciar sesión. Intenta nuevamente."
        );
      } //manejar error por si el error no estas registrado
    }
  };

  return (
    <>
      <div className="absolute inset-0 h-screen w-screen flex justify-center items-center z-30 bg-gradient-to-br from-teal-800 via-blue-300 to-purple-600">
  <div className="flex flex-col items-center w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
    <h1 className="text-2xl font-bold text-black text-center mb-6">
      ¡Hola! Por favor, inicia sesión para disfrutar de nuestra aplicación
    </h1>

    {errorMessage && (
      <div className="w-full mb-4 p-2 bg-red-200 text-red-700 text-center rounded-lg">
        {errorMessage}
      </div>
    )}

    <form onSubmit={IngresarUser} className="w-full flex flex-col items-center">
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition-colors duration-300"
      >
        Ingresar
      </button>
    </form>

    <div className="text-center w-full">
      <p className="mb-2 text-gray-600">
        ¿No tienes cuenta?{" "}
        <Link
          to={routes.REGISTER}
          className="text-blue-600 hover:underline transition-colors duration-300"
        >
          Crear cuenta
        </Link>
      </p>
    </div>
  </div>
</div>

      <Outlet />
    </>
  );
}
