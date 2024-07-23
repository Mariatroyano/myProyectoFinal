import React, { useEffect, useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import "./MainScreen.css";
import { useFetch } from "../..";


function MainScreen() {
  const [addedItems, ] = useState([]);
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
              <FinalCardComponent
                key={product.id}
                nombreProducto={product.title}
                icon={product.image}
                descripcion={product.description}
                precio={`$${product.price}`}
                product={product}
                addedItems={addedItems}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainScreen;
