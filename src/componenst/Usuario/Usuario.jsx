import React from "react";

const UsuarioForm = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Registro de Usuario
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingrese su nombre"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingrese su correo electrónico"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingrese su número de teléfono"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección
          </label>
          <textarea
            id="direccion"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingrese su dirección"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="estadoCuenta"
            className="block text-sm font-medium text-gray-700"
          >
            Estado de Cuenta
          </label>
          <input
            type="number"
            id="estadoCuenta"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingrese el estado de la cuenta"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsuarioForm;
