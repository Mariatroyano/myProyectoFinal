import React, { useState } from "react";

const Search = ({ products, value, setValue, setProductsFiltrados }) => {
  const onChangeData = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsFiltrados(searchValue ? filteredProducts : []);//que si exite me pase los productos y si no qme de el array
  };

  return (
    <div className="flex flex-col md:flex-row max-h-[500px] ">
      <div className="flex flex-col w-full md:w-auto  text-black mr-100">
        <input
          className="w-96 "
          type="text" 
          placeholder="Busca Por Producto..                                           🔍"
          value={value}
          onChange={onChangeData}
        />
      </div>
    </div>
  );
};

export default Search;
