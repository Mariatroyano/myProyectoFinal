import { useEffect, useState } from "react";
import getLocalStorage from "../../utils/getLocalStorage";
import { FinalCardComponent } from "../card/FinalCardComponent";

function GetCategoiras({ category, handleAddItem, products }) {
  return (
    <div className="flex overflow-x-auto">
      {products
        .filter((item) => item.category == category)
        .map((product, index) => {
          return (
            <div key={index} className="contend ">
              {console.log(product)}
              <FinalCardComponent
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
  );
}

export default GetCategoiras;
