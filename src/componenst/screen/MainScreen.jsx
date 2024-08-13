import React, { useState } from "react";
import "./MainScreen.css";
import { useFetch } from "../../index.js";
import getLocalStorage from "../../utils/getLocalStorage.js";
import GetCategoiras from "./getCategoiras.jsx";
import { ComponentPrincipal } from "../ComponentPrincipal/ComponentPrincipal.jsx";
import img from "../../../public/imagenpersonaje.webp";
import img2 from "../../../public/imagen2.webp";
import img3 from "../../../public/imagen4.webp";
import useCartStore from "../../store/cart/useCartStore.js";
// import electrodomesticos from "../../../public/electrodomeesticos.jpg"


function MainScreen() {
  const [category, setCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const url = "https://fakestoreapi.com/products";
  const addProducToCart = useCartStore((state) => state.addProducToCart);
  const [activo, setactivo] = useState(false);
  const { data: products, loading, error } = useFetch(url);



  const categories = [
    { name: "Joyas", value: "jewelery" },
    { name: "Electrodomésticos", value: "electronics" },
    { name: "Moda Hombre", value: "men's clothing" },
    { name: "Moda Mujer", value: "women's clothing" },
  ];

  const handleAddItem = (newProduct) => {
    addProducToCart(newProduct);
  };

  const handleCategory = (value) => {
    setCategory(value);
    setactivo(!activo);
    console.log("categoria seleccionada", value);
  };

  const slides = [img, img2, img3];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <p className="flex justify-center items-center ">Categorías del Eleganza</p>
      <nav className="relative">
        {!activo && (
          <>
            <div className="flex justify-center items-center h-24 gap-x-0.5">
              {categories.map((categ, index) => (
                <button
                  className="bg-white text-black px-4 py-2 rounded-tr-lg"
                  key={index}
                  onClick={() => handleCategory(categ.value)}
                >
                  {categ.name}
                </button>
              ))}
            </div>
            <div className="relative h-[1000px] overflow-hidden rounded-lg">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide}
                    className="block w-[100%] h-[1000px]"
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{ top: "90px", left: "30px" }}
                      className="text-8xl text-slate-950 font-bold absolute p-4 rounded"
                    >
                      The feature of health
                    </span>
                    <span
                      style={{ top: "200px", left: "30px" }}
                      className="text-5xl text-slate-950 font-bold absolute p-4 rounded"
                    >
                      Eleganza with style
                    </span>
                  </div>
                </div>
              ))}

              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-black" : "bg-gray-400"
                    }`}
                    aria-current={currentSlide === index ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => handleIndicatorClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}

        {activo && (
          <>
            <button onClick={() => setactivo(!activo)}>X</button>
            <GetCategoiras
              category={category}
              handleAddItem={handleAddItem}
              products={products}
            />
          </>
        )}
      </nav>
      <div>
        <h1
          className="text-white w-full h-28 text-center"
          style={{ fontSize: "100px" }}
        >
          Ofertas
        </h1>
      </div>
      <div className="card__body">
        {loading && <p>Cargando.....</p>}
        {error && <p>Ocurrió un error.</p>}
        {(!products || products.length <= 0) && !loading && (
          <p>No hay productos</p>
        )}
        <div className="card__body1 absolute">
          {products &&
            products.map((product, i) => (
              <div key={i} className="contend">
                <div>
                  <ComponentPrincipal
                    {...product}
                    isAdded={getLocalStorage()?.some(
                      (productInCart) => productInCart?.id === product?.id
                    )}
                    onAddProduct={() => handleAddItem(product)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MainScreen;
