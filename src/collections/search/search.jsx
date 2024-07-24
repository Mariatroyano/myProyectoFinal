import React, { useState } from "react";
import "./search.css";
import { FinalCardComponent } from "../card/FinalCardComponent";
const Search = ({ products }) => {
  const [Value, setValue] = useState("");
  const [ProductsFiltrados, setProductsFiltrados] = useState([]);

  const onChangeData = (e) => {
    setValue(e.target.value);
    const es = e.target.value;
    const d = products.filter((e) => e.title.includes(es));
    setProductsFiltrados(d);
    console.log(d);
    console.log(Value);
  };

  console.log(Value);
  return (
    <div style={{ backgroundColor: "#ccc", padding: "100px" }}>
      <input
        className="search__input"
        type="text"
        placeholder="Agrega"
        value={Value}
        onChange={(e) => onChangeData(e)}
      />
      {Value != "" && (
        <>
          {ProductsFiltrados.map((item, i) => (
            <div key={i}>
              <>
                <FinalCardComponent {...item} />
                <br />
              </>
            </div>
          ))}
          <br />
          {ProductsFiltrados.length <= 0
            ? "Nose encontraron los productos"
            : ""}
        </>
      )}
    </div>
  );
};

export default Search;
