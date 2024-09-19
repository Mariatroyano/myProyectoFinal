import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import routes from "../../common/routes-constants";
import { useEffect, useState } from "react";
import { auth } from "../../fireBase/credenciales";

const InfoUsuario = () => {
  const navigate = useNavigate();

  const regresarPaginaPrincipal = () => {
    navigate(routes.PRODUCTS);
  };
  const [UsuarioBaseDatos, setUsuarioBaseDatos] = useState({});
  const getUsuario = async (user) => {
    await fetch(`http://localhost:3000/usuarios/id/${user.uid}`)
      .then((res) => res.json())
      .then((res) => setUsuarioBaseDatos(res));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsuario(user);
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
        setTimeout(() => {
          return navigate(routes.LOGING);
        }, 0);
      }
    });
  }, []);
  if ( UsuarioBaseDatos)
    return (
      <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <div className="space-y-4">
          <div>
            <p className="text-gray-900 text-base font-semibold">Dirección:</p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.Direccion}</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-semibold">Email:</p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.Email}</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-semibold">
              Estado Cuenta:
            </p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.EstadoCuenta}</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-semibold">Nombre:</p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.Nombre}</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-semibold">Teléfono:</p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.Telefono}</p>
          </div>
          <div>
            <p className="text-gray-900 text-base font-semibold">
              UID Usuario:
            </p>
            <p className="text-lg text-gray-600">{UsuarioBaseDatos.UID_Usuario}</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={regresarPaginaPrincipal}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 transition duration-300"
          >
            Regresar a la Página Principal
          </button>
        </div>
      </div>
    );
};

export default InfoUsuario;
