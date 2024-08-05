import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import { useFetch } from "../../index.js";
import getLocalStorage from "../../utils/getLocalStorage.js";
import GetCategoiras from "./getCategoiras.jsx";
import { ComponentPrincipal } from "../ComponentPrincipal/ComponentPrincipal.jsx";
import img from "../../../public/imagenpersonaje.webp";
import img2 from "../../../public/imagen2.webp";
import img3 from "../../../public/imagen3.webp";
import useCartStore from "../../store/cart/useCartStore.js";

function MainScreen() {
  const [category, setCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const url = "https://api-productos-categorias.vercel.app/products";
  const addProducToCart = useCartStore((state) => state.addProducToCart);
  const [activo, setactivo] = useState(false);
  const [joyas, setjoyas] = useState([]);
  const { data: products, loading, error } = useFetch(url);

  useEffect(() => {
    console.log("Productos:", typeof products); // Verificar la estructura de los productos
  }, [products]);

  const categories = [
    { name: "joyas", value: "Joyas" },
    { name: "Electrodomésticos", value: "Electrodomésticos" },
    { name: "Ropa Hombre", value: "Ropa Hombre" },
    { name: "Ropa Mujer", value: "Ropa Mujer" },
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
 
  return (
    <>
      <nav className="relative">
        {!activo && (
          <>
            {categories.map((categ, index) => (
              <button
                className="bg-white mr-4 mt-3 justify-center items-center"
                key={index}
                onClick={() => handleCategory(categ.value)}
              >
                {categ.name}
              </button>
            ))}
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
                    className="block w-[100%] h-[1000px] "
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
                      className="text-5xl  text-slate-950 font-bold absolute p-4 rounded"
                    >
                      Eleganza with style
                    </span>
                  </div>
                </div>
              ))}
              <button
                onClick={handlePrevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 rounded"
              >
                Prev
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black p-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {activo && (
          <>
            <button onClick={() => setactivo(!activo)}>X</button>
            <GetCategoiras category={category} handleAddItem={handleAddItem} products={products}/>
          </>
        )}
      </nav>
      <div className="card__body">
        {loading && <p>Cargando.....</p>}
        {error && <p>Ocurrió un error.</p>}
        {!products && (
          <div>
            <ul>
              {Array.isArray(products) ? (
                products.map((product) => (
                  <li key={product.id}>{product.title}</li>
                ))
              ) : (
                <li>No hay productos</li>
              )}
            </ul>
          </div>
        )}
        {products.length <= 0 && !loading && <p>No hay productos</p>}
        <div className="card__body1 absolute top-[1100px]">
          {/* products.map((product, index) => ( */}
          {products &&
            products.map((product, i) => (
              <div key={i} className="contend ">
                {/* {console.log(product)
                } */}
                <div>Funciona</div>
                <ComponentPrincipal
                  {...product}
                  isAdded={getLocalStorage()?.some(
                    (productInCart) => productInCart?.id === product?.id
                  )}
                  onAddProduct={() => handleAddItem(product)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MainScreen;
