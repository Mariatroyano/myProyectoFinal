import React, { useEffect } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";

export default function Buscador({ value, productsFiltrados }) {
  useEffect(() => {
    console.log("Buscador Value:", value);
    console.log("Buscador Filtered Products:", productsFiltrados);
  }, [value, productsFiltrados]);

  return (
    <>
      {productsFiltrados && (
        <div className="flex flex-wrap max-w-[100%] overflow-auto">
          {productsFiltrados.length > 0 ? (
            productsFiltrados.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 lg:w-1/4 p-2">
                <FinalCardComponent {...item} />
              </div>
            ))
          ) : (
            <div className="w-full text-center text-black">
              No se encontraron los productos
            </div>
          )}
        </div>
      )}
    </>
  );
}
