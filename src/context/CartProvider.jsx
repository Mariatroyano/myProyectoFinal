import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../fireBase/credenciales";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [Productoscart, setProductosCart] = useState([]);
  const [user, setuser] = useState([]);
  
  const CartUsuario = async () => {
    await fetch(`http://localhost:3000/carritoCompras/UID_Usuario/${user.uid}`)
      .then((res) => res.json())
      .then((res) => {
        setCart(res);
        console.log(res);
      });
  };

  const addToCart = async (id_producto, cantidad = 1) => {
    try {
      const updatedProducts = [{ id_producto, cantidad }, ...cart.ID_Productos];
      await fetch(
        `http://localhost:3000/carritoCompras/id/${cart.ID_Carrito}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ID_Productos: updatedProducts,
          }),
        }
      );
      console.log("se hizo un put");
      CartUsuario();
    } catch (error) {
      console.log("Error al actualizar el carrito", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
      }
    });
  }, []);
  useEffect(() => {
    CartUsuario();
  }, [user]);
  useEffect(() => {
    if (cart && cart.ID_Productos) {
      const fetchProducts = cart.ID_Productos.map((item) =>
        fetch(`http://localhost:5814/productos/${item.id_producto}`).then(
          (res) => res.json()
        )
      );

      Promise.all(fetchProducts)
        .then((productos) => {
          setProductosCart(productos);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    } else {
      setProductosCart([]);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        Productoscart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
