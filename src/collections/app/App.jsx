import { HeaderComponent } from "../header/HeaderComponent";
import React, { useState } from "react";
import MainScreen from "../screen/MainScreen";
import Search from "../search/search";
import { useFetch } from "../..";



function App({ Logeado = false, setLogeado }) {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  
  
  return (
    <>
      {Logeado ? (
        <>
          <div className="HeaderComponent">
            <HeaderComponent />
            <div className="nav-right">
              <Search
                products={products}
              />
              {/* <Button num={addedItems.length} click={setShowAddProducts} /> */}
            </div>
          </div>
          <div className="componentsCard">
            <MainScreen />
          </div>
        </>
      ) : (
        <h1>Error..No Te Encuentras Logeado </h1>
      )}
    </>
  );
}

export default App;
