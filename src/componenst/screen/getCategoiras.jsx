import { useEffect, useState } from "react";
import getLocalStorage from "../../utils/getLocalStorage";
import { FinalCardComponent } from "../card/FinalCardComponent";

function GetCategoiras({ category, handleAddItem, products }) {
 
  const [ropa_mujer, setropa_mujer] = useState([]);
  const Ropa_Mujer = () => {
    const j = products.filter((item) => item.CATEGORIA == category);
    setropa_mujer(j);
  };

  useEffect(() => {
    Ropa_Mujer();
  }, []);
  console.log(category);

  return (
    <div className="flex overflow-x-auto">
      {ropa_mujer.map((product, index) => {
        return (
          <div key={index} className="contend ">
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
