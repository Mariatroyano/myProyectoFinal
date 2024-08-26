import React, { useContext } from "react";
import imagen from "../../../public/carrito.png";
import useCartStore from "../../store/cart/useCartStore";
import { CartContext } from "../../context/CartContext";

export const CartButtonComponent = ({ onCartClick }) => {
  // const countProducts = useCartStore((state) => state.cart.length);
  const { Productoscart } = useContext(CartContext);
  const d = (Productoscart.length);
  return (
    <button
      className="bg-[#f3efef] border border-[#ccc] p-2 cursor-pointer rounded-full relative flex items-center justify-center w-16 h-16"
      onClick={onCartClick}
    >
      <img className="w-10 h-10" src={imagen} alt="Cart" />
      {Productoscart > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {d}
        </span>
      )}
    </button>
  );
};

// import React from "react";
// import { products } from "../products";
// import { useContext } from "react";
// // eslint-disable-next-line
// import { useEffect } from "react";
// import { fetchProducts } from "../data/getProducts";
// import { CartContext } from "../context/CartContext";

// const ProductList = () => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Produc List</h2>
//       {products.map((product) => {
//         return (
//           <div style={{ border: "1px solid" }} key={product.id}>
//             <h2>{product.name}</h2>
//             {/* <img src={product.image} alt={product.title} /> */}
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <button onClick={() => addToCart(product)}>
//               Agregar al carrito
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProductList;
