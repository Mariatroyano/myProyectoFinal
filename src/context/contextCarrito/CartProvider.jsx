import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";

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

  const addToCart = async (id_producto, Cantidad = 1) => {
    try {
      console.log(id_producto, Cantidad);
      if (cart) {
        console.log(cart);

        const updatedProducts = [
          { id_producto, Cantidad },
          ...cart?.ID_Productos,
        ];
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
      }

      CartUsuario();
    } catch (error) {
      console.log("Error al actualizar el carrito", error);
    }
  };

  const deleteAllProductsCart = async () => {
    try {
      if (cart) {
        await fetch(
          `http://localhost:3000/carritoCompras/id/${cart.ID_Carrito}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ID_Productos: [],
            }),
          }
        );
        console.log("se hizo un put");
      }

      CartUsuario();
    } catch (error) {
      console.log("Error al eliminar el carrito", error);
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
    const fetchProductDetails = async () => {
      try {
        if (cart && Array.isArray(cart.ID_Productos) && cart.ID_Productos.length > 0) {
          const productos = await Promise.all(
            cart.ID_Productos.map(async (item) => {
              if (item.id_producto) {
                const res = await fetch(
                  `https://fakestoreapi.com/products/${item.id_producto}`
                );
                const product = await res.json();
                return { ...product, cantidad: item.Cantidad };
              }
            })
          );
          setProductosCart(productos);
        } else {
          setProductosCart([]);
        }
      } catch (error) {
        console.log("error al traer datos ", error);
      }
    };
  
    fetchProductDetails();
  }, [cart]);
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        Productoscart,
        deleteAllProductsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
