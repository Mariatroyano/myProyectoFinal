import React, { useEffect, useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import "./MainScreen.css";
import { useFetch } from "../..";
import setLocalStorage from "../../utils/setLocalStorage.js";
import getLocalStorage from "../../utils/getLocalStorage.js";

function MainScreen() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const [cart, setCart] = useState(getLocalStorage());

  const handleAddItem = (newProduct) => {
    if (!cart?.some((productInCart) => productInCart.id == newProduct.id)) {
      setCart([...cart, newProduct]);
      setLocalStorage([...cart, newProduct]);
    } else {
      alert("El producto ya fue agregado.");
    }
  };

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
                {...product}
                isAdded={getLocalStorage()?.some(
                  (productInCart) => productInCart.id == product.id
                )}
                onAddProduct={() => handleAddItem(product)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainScreen;
