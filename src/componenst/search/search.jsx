import React, { useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import Buscador from "./Buscador";

const Search = ({ products, value, setValue, setProductsFiltrados }) => {
  // const [value, setValue] = useState("");
  // const [productsFiltrados, setProductsFiltrados] = useState([]);

  const onChangeData = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    // Filtra los productos basados en el valor de búsqueda
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsFiltrados(searchValue ? filteredProducts : []);
  };

  return (
    <div className="flex flex-col md:flex-row max-h-[500px]">
      <div className="flex flex-col w-full md:w-auto">
        <input
          className="w-full md:w-[200%] px-12 py-2 bg-[#f3efef] border border-[#ccc] rounded-lg h-8 mb-4 text-black"
          type="text"
          placeholder="Busca Por Producto..."
          value={value}
          onChange={onChangeData}
        />
        {/* <Buscador value={value} productsFiltrados={productsFiltrados} /> */}
        {/* {value && (
          <div className="flex flex-col max-w-xs overflow-y-scroll h-[70%] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
            {productsFiltrados.map((item, i) => (
              <button
                key={i}
                // className="border-b-2 border-r-2 border-[#828181] border-t border-[#d2d2d2] rounded-tr-lg w-full min-h-[40px] mt-1 bg-[#ffffffec] text-left truncate"
              >
                {item.title}
              </button>
            ))}
          </div>
        )} */}
      </div>

      {/* {value && (
        <div className="flex flex-wrap max-w-[70%] overflow-auto">
          {productsFiltrados.length > 0 ? (
            productsFiltrados.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 lg:w-1/4 p-2">
                <FinalCardComponent {...item} />
              </div>
            ))
          ) : (
            <div className="w-full text-center text-black">No se encontraron los productos</div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Search;
