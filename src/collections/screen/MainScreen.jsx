import React, { useEffect, useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import "./MainScreen.css";
import { useFetch } from "../..";

function MainScreen() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="card__body">
      {loading && <p>Cragando.....</p>}
      {error && <p></p>}
      {products.length <= 0 && !loading && <p>No hay productos</p>}
      <div className="card__body1">
        {products.map((product, index) => {
          return (
            <div key={index} className="contend">
              <FinalCardComponent {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainScreen;
