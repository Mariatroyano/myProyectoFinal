import React, { useEffect, useState } from "react";
import { FinalCardComponent } from "../card/FinalCardComponent";
import "./MainScreen.css";
import { useFetch } from "../..";
import setLocalStorage from "../../utils/setLocalStorage.js";
import getLocalStorage from "../../utils/getLocalStorage.js";
import GetCategoiras from "./getCategoiras.jsx";
import { ComponentPrincipal } from "../ComponentPrincipal/ComponentPrincipal.jsx";
import img from "../../../public/imagenpersonaje.webp";
import img2 from "../../../public/imagen2.webp";
import img3 from "../../../public/imagen3.webp";
import useCartStore from "../../store/cart/useCartStore.js";

function MainScreen() {
  const [category, setCategory] = useState(null);
  const url = "https://fakestoreapi.com/products";
  const addProducToCart = useCartStore(state=>state.addProducToCart)
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
    // if (!cart?.some((productInCart) => productInCart.id == newProduct.id)) {
      addProducToCart(newProduct)
      // setLocalStorage([...cart, newProduct]);
    // } else {
    //   alert("El producto ya fue agregado.");
    // }
  };

  const handleCategory = (value) => {
    setCategory(value);
    setactivo(!activo);
    console.log("categoria seleccionada", value);
  };

  useFetch

  return (
    <>
      <nav className="relative">
        {!activo && (
          <>
            {categories.map((categ, index) => (
              <>
                <button
                  className="bg-white mr-4 mt-3 justify-center items-center"
                  key={index}
                  onClick={() => {
                    handleCategory(categ.value);
                  }}
                >
                  {categ.name}
                </button>
              </>
            ))}
            <div className="relative">
              <div>
                <img
                  src={img}
                  alt="Descripción de la imagen"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{ fontSize: "80px", top: "90px", left: "30px " }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  The feature of health
                </span>

                <span
                  style={{ fontSize: "50px", top: "200px", left: "30px" }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  Eleganza with style
                </span>
              </div>
            </div>

            <div className="relative">
              <img
                src={img2}
                alt="Descripción de la imagen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{ fontSize: "80px", top: "90px", left: "30px " }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  The feature of health
                </span>

                <span
                  style={{ fontSize: "50px", top: "200px", left: "30px" }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  Eleganza with style
                </span>
              </div>
            </div>

            <div className="relative">
              <img
                src={img3}
                alt="Descripción de la imagen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{ fontSize: "80px", top: "90px", left: "30px " }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  The feature of health
                </span>

                <span
                  style={{ fontSize: "50px", top: "200px", left: "30px" }}
                  className="text-slate-950 font-bold absolute  p-4 rounded "
                >
                  Eleganza with style
                </span>
              </div>
            </div>
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
                <ComponentPrincipal
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
    </>
  );
}

export default MainScreen;
