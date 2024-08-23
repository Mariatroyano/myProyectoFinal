import React, { useEffect, useState } from "react";
import { useFetch } from "../../index.js";
import getLocalStorage from "../../utils/getLocalStorage.js";
import GetCategoiras from "./getCategoiras.jsx";
import { ComponentPrincipal } from "../ComponentPrincipal/ComponentPrincipal.jsx";
import img from "../../../public/imagenPersonaje.webp";
import img2 from "../../../public/imagen2.jpg";
import img3 from "../../../public/imagen3.webp";
import electrodomesticos from "../../../public/electrodomesticos.png";
import ropamujer from "../../../public/ropamujer.webp";
import ropahombre from "../../../public/ropahombre.webp";
import joyeria from "../../../public/joyeria.jpg";
import useCartStore from "../../store/cart/useCartStore.js";
import Footer from "../Footer/Footer.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales.js";

function MainScreen() {
  const [category, setCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const url = "http://localhost:5814/productos";
  const addProducToCart = useCartStore((state) => state.addProducToCart);
  const [activo, setActivo] = useState(false);
  const [products, setproducts] = useState([]);
  const loading = false;
  const error = null;

  const categories = [
    { name: "Joyas", value: "jewelery", image: joyeria },
    {
      name: "Electrodomésticos",
      value: "electronics",
      image: electrodomesticos,
    },
    { name: "Moda Hombre", value: "men's clothing", image: ropahombre },
    { name: "Moda Mujer", value: "women's clothing", image: ropamujer },
  ];

  const handleAddItem = (newProduct) => {
    addProducToCart(newProduct);
  };

  const handleCategory = (value) => {
    setCategory(value);
    setActivo(!activo);
    console.log("Categoria seleccionada", value);
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
  useEffect(() => {
    //.............................................aquiiiiiiii
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontradoooooooooo");
      }
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5814/productos`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);
  return (
    <>
      <p className="text-4xl text-center mb-8 ">Categorías de Eleganza</p>
      <div className="flex justify-center items-center mb-2 space-x-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className="w-40 h-40 rounded-2xl overflow-hidden"
            onClick={() => handleCategory(cat.value)}
          >
            <img
              src={cat.image}
              className="w-full h-full object-cover"
              alt={cat.name}
            />
          </button>
        ))}
      </div>

      <nav className="relative">
        {!activo && (
          <>
            <div className="flex justify-center items-center h-24 gap-x-0.5">
              {categories.map((categ, index) => (
                <button
                  className="text-white px-12 py-2 rounded-tr-lg hover:bg-blue-700"
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
                    className="block w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />
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
            <button
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setActivo(!activo)}
            >
              X
            </button>
            <GetCategoiras
              category={category}
              handleAddItem={handleAddItem}
              products={products}
            />
          </>
        )}
      </nav>
      <div className="text-center my-8">
        <h1 className="text-white text-6xl">Ofertas</h1>
      </div>
      <div className="bg-gray-200 p-8">
        {loading && <p className="text-white">Cargando.....</p>}
        {error && <p className="text-white">Ocurrió un error.</p>}
        {(!products || products.length <= 0) && !loading && (
          <p className="text-white">No hay productos</p>
        )}
        <div className="flex flex-wrap justify-around mt-4">
          {products &&
            products.map((product, i) => (
              <div key={i} className="w-96 mb-4">
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
      <Footer />
    </>
  );
}

export default MainScreen;
