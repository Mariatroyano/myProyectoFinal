import React, { useEffect, useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import "./MainScreen.css";
import { useFetch } from "../..";
import setLocalStorage from "../../utils/setLocalStorage.js";
import getLocalStorage from "../../utils/getLocalStorage.js";
import GetCategoiras from "./getCategoiras.jsx";
import { ComponentPrincipal } from "../ComponentPrincipal/ComponentPrincipal.jsx";

function MainScreen() {
  const [category, setCategory] = useState(null);
  const url = "https://fakestoreapi.com/products";
  const [cart, setCart] = useState(getLocalStorage());
  const [activo, setactivo] = useState(false);

  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const categories = [
    { name: "Jewerely", value: "jewelery" },
    { name: "Electronic", value: "electronics" },
    { name: "Mens Clothing", value: "men's clothing" },
    { name: "Women Clothing", value: "women's clothing" },
  ];

  const handleAddItem = (newProduct) => {
    if (!cart?.some((productInCart) => productInCart.id == newProduct.id)) {
      setCart([...cart, newProduct]);
      setLocalStorage([...cart, newProduct]);
    } else {
      alert("El producto ya fue agregado.");
    }
  };

  const handleCategory = (value) => {
    setCategory(value);
    setactivo(!activo);
    console.log("categoria seleccionada", value);
  };

  return (
    <>
      <nav>
        {!activo && (
          <>
            {categories.map((categ, index) => (
              <>
                <button
                  key={index}
                  onClick={() => {
                    handleCategory(categ.value);
                  }}
                >
                  {categ.name}
                </button>
              </>
            ))}
          </>
        )}

        {activo && (
          <>
            <button
              onClick={() => {
                setactivo(!activo);
              }}
            >
              X
            </button>
            <GetCategoiras category={category} handleAddItem={handleAddItem} />
          </>
        )}
      </nav>
      <div className="card__body">
        {loading && <p>Cragando.....</p>}
        {error && <p></p>}
        {products && (
          <div>
            <h2>productos en {category}</h2>
            <ul>
              {Array.isArray(products) ? (
                products.map((product) => {
                  <li key={product.id}>{product}</li>;
                  console.log("productos", product);
                })
              ) : (
                <li>NO hay productos</li>
              )}
            </ul>
          </div>
        )}
        {products.length <= 0 && !loading && <p>No hay productos</p>}
        <div className="card__body1">
          {products.map((product, index) => {
            return (
              <div key={index} className="contend">
                {/* <FinalCardComponent
                
                  {...product}
                  isAdded={getLocalStorage()?.some(
                    (productInCart) => productInCart.id == product.id
                  )}
                  onAddProduct={() => handleAddItem(product)}
                /> */}
                <ComponentPrincipal   {...product}
                  isAdded={getLocalStorage()?.some(
                    (productInCart) => productInCart.id == product.id
                  )}
                  onAddProduct={() => handleAddItem(product)}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainScreen;
