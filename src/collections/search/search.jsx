import React, { useState } from "react";
import "./search.css";
import { FinalCardComponent } from "../card/FinalCardComponent";
const Search = ({ products }) => {
  const [Value, setValue] = useState("");
  const [ProductsFiltrados, setProductsFiltrados] = useState([]);

  const onChangeData = (e) => {
    setValue(e.target.value);
    const es = e.target.value;
    const d = products.filter((e) => e.title.toLowerCase().includes(es.toLowerCase()));
    setProductsFiltrados(d);
    console.log(d);
    console.log(Value);
  };

  console.log(Value);
  return (
    <div className="Buscador">
      <div>
        <input
          className="search__input"
          type="text"
          placeholder="Busca por producto,coleccion..."
          value={Value}
          onChange={(e) => onChangeData(e)}
        />
        {Value != "" && (
          <div className="Div_Button_title_search">
            {ProductsFiltrados.map((item, i) => (
              <>
                <button key={i} className="Button_title_search">
                  {item.title}
                </button>
              </>
            ))}
          </div>
        )}
      </div>
      {Value != "" && (
        <div className="Div_ProductsFiltrados">
          {ProductsFiltrados.map((item, i) => (
            <div key={i}>
              <>
                <FinalCardComponent {...item} />
                <br />
              </>
            </div>
          ))}
          <div>
            {ProductsFiltrados.length <= 0
              ? "Nose encontraron los productos"
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
