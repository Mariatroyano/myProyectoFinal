import React from "react";

export default function PolitPrivacidad() {
  return (
    <div className="bg-white text-black px-6 py-8 max-w-3xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Política de Tratamiento de Datos Personales
      </h2>
      <p className="text-base leading-relaxed mb-6">
        Con el objetivo de dar cumplimiento a la legislación vigente en materia de protección de datos,
        en especial la Ley 1581 de 2012 (y demás normas que la modifiquen, adicionen, complementen o
        desarrollen) y al Decreto 1377 de 2013, a continuación lo ponemos al tanto de los aspectos
        relevantes en relación con la recolección, uso y transferencia de datos personales que Estudio
        de Moda S.A.S (en adelante la “Compañía” o “EDM”) realiza de sus datos personales, en virtud
        de la autorización otorgada por usted para adelantar dicho tratamiento al momento de visitar,
        registrarse, acceder, usar o interactuar de alguna manera con cualquiera de nuestros Canales,
        así como también el manejo de sus datos. En esta política de tratamiento de datos personales (la
        “Política”) encontrará los lineamientos corporativos y de ley bajo los cuales la Compañía realiza
        el tratamiento de sus datos, la finalidad, sus derechos como titular, así como los procedimientos
        internos y externos para el ejercicio de tales derechos. Conforme a lo previsto en el artículo 15
        de la Constitución Política de Colombia y la legislación aplicable (Ley 1266 de 2008, Ley 1581
        de 2012, Decreto 1377 de 2013 y todas aquellas normas que las reglamenten, adicionen, deroguen o
        modifiquen), tenemos una clara política de privacidad y protección de sus datos personales: no
        obtenemos información personal de terceros que tengan una relación comercial o jurídica con la
        Compañía, incluyendo a Clientes, Empleados o Proveedores, a menos que estos la hayan suministrado
        voluntariamente mediante su consentimiento previo, expreso y calificado.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out"
        >
          Volver a la página
        </button>
      </div>
    </div>
  );
}
