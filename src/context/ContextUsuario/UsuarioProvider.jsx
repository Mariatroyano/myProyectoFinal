import React from "react";

export default CartUsuario = async () => {
  await fetch(`http://localhost:3000/carritoCompras/UID_Usuario/${uid}`)
    .then((res) => res.json())
    .then((res) => {
      setCart(res);
      console.log(res);
    });

  return <div></div>;
};
