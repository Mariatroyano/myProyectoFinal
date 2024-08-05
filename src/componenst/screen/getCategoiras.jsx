import { useFetch } from "../..";
import getLocalStorage from "../../utils/getLocalStorage";
import { FinalCardComponent } from "../card/FinalCardComponent";

function GetCategoiras({ category, handleAddItem }) {
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return (
    <>
      {loading && <p>loading...</p>}
      {data.map((product, index) => {
        return (
          <div key={index} className="contend">
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
    </>
  );
}

export default GetCategoiras;
