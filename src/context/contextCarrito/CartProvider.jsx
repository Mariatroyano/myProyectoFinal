import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [Productoscart, setProductosCart] = useState([]);
  const [user, setuser] = useState([]);

  const CartUsuario = async () => {
    if (user) {
      await fetch(
        `http://localhost:3000/carritoCompras/UID_Usuario/${user.uid}`
      )
        .then((res) => res.json())
        .then((res) => {
          setCart(res);
          console.log(res);
          setProductosCart(res?.ID_Productos);
        });
    }
  };

  const addToCart = async (newProduct, Cantidad = 1) => {
    //verifica si un producto ya está en el carrito y, dependiendo de ello, o bien incrementa su cantidad o lo agrega como nuevo producto
    const { id } = newProduct;
    console.log(cart);
    try {
      if (cart) {
        //va y mira si el carrito ya existe el carrito no continua
        const existProduct = cart.ID_Productos.some(
          //some mira si el producto existe
          (product) => product.id == id
        );
        const newCart = existProduct
          ? cart.ID_Productos.map((product) => {
              if (product.id == id) {
                return {
                  ...product,
                  cantidad: product.cantidad + 1,
                };
              }
              return product;
            })
          : [...cart.ID_Productos, { ...newProduct, cantidad: 1 }]; //Si el producto no está en el carrito, se agrega un nuevo objeto de producto al arreglo de productos en el carrito
        await fetch(
          `http://localhost:3000/carritoCompras/id/${cart.ID_Carrito}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ID_Productos: newCart,
            }),
          }
        );
        console.log("se hizo un put");
      }
      CartUsuario(); //Esta línea invoca la función CartUsuario, la cual probablemente actualiza o recarga el carrito para reflejar los cambios recientes en la interfaz de usuario.
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
        CartUsuario();
      }

      CartUsuario();
    } catch (error) {
      CartUsuario();

      console.log("Error al eliminar el carrito", error);
    }
  };

  const deleteProduct = async (product) => {
    try {
      const { id } = product;
      const existProduct = product.cantidad > 1;
      const newCart = existProduct
        ? cart.ID_Productos.map((product) => {
            if (product.id == id) {
              return {
                ...product,
                cantidad: product.cantidad - 1,
              };
            }
            return product;
          })
        : cart.ID_Productos.filter((item) => item.id != product.id);

      if (cart) {
        await fetch(
          `http://localhost:3000/carritoCompras/id/${cart.ID_Carrito}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ID_Productos: newCart,
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

  // verifica usuario
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        // console.log("Usuario Registrado");
      } else {
        console.log("Usuario no encontrado");
      }
    });
  }, []);
  // llama al carrito
  useEffect(() => {
    CartUsuario();
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        Productoscart,
        deleteAllProductsCart,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
