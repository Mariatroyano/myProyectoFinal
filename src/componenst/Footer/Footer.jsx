import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          ¿Preguntas? Llama al <a href="tel:123456789" className="text-blue-400 hover:text-blue-300">123456789</a>
        </p>
        <ul className="list-none p-0 m-0 flex flex-wrap justify-center">
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Preguntas frecuentes</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Centro de ayuda</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Cuenta</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Prensa</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Relaciones con inversionistas</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Términos de uso</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Privacidad</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Preferencias de cookies</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Información corporativa</a></li>
          <li className="mx-2"><a href="#" className="text-gray-200 hover:text-blue-400">Contáctanos</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
