import React from 'react';

// Componente FacturaCardComponent
const FacturaCardComponent = ({ factura }) => {
  if (!factura) {
    return <p className="text-center text-gray-500">Datos de factura no disponibles.</p>;
  }

  const { EstadoFactura, FechaPedido, UID_Usuario, ID_Productos, PrecioTotal, ID_Factura } = factura;

  // Convertir FechaPedido a una fecha legible
  const fechaPedido = FechaPedido ? new Date(FechaPedido).toLocaleDateString() : 'Fecha no disponible';

  return (
    <div className="max-w-lg mx-auto my-6 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white">
        <h2 className="text-3xl font-bold">Factura #{ID_Factura}</h2>
      </div>

      <div className="p-6">
        {/* Estado de la factura */}
        <p className={`text-lg font-semibold mb-4 ${EstadoFactura === 1 ? 'text-green-600' : 'text-red-600'}`}>
          Estado: {EstadoFactura === 1 ? 'Pagada' : 'Pendiente'}
        </p>

        {/* Fecha de pedido */}
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Fecha de Pedido:</span> {fechaPedido}
        </p>

        {/* Información del usuario */}
        <p className="text-gray-700 mb-4">
          <span className="font-medium">Usuario ID:</span> {UID_Usuario}
        </p>

        {/* Lista de productos */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">Productos:</p>
          {ID_Productos && ID_Productos.length > 0 ? (
            <ul className="space-y-2">
              {ID_Productos.map((producto, index) => (
                <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">{producto.nombre}</span>
                  <span>{producto.cantidad}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No hay productos.</p>
          )}
        </div>

        {/* Precio total */}
        <p className="text-xl font-bold text-gray-900">
          Precio Total: ${PrecioTotal ? PrecioTotal.toFixed(2) : 'Precio no disponible'}
        </p>
      </div>
    </div>
  );
};

// Ejemplo de datos para pruebas
const ejemploFactura = {
  ID_Factura: 12345,
  EstadoFactura: 1, // 1 para Pagada, 0 para Pendiente
  FechaPedido: '2024-08-22T10:00:00Z',
  UID_Usuario: 'user123',
  ID_Productos: [
    { nombre: 'Producto A', cantidad: 2 },
    { nombre: 'Producto B', cantidad: 1 }
  ],
  PrecioTotal: 59.99
};

// Ejemplo de uso del componente
const App = () => (
  <div className="p-4">
    <FacturaCardComponent factura={ejemploFactura} />
  </div>
);

export default App;
