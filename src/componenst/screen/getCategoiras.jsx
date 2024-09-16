
import { FinalCardComponent } from "../cardProducDetal/FinalCardComponent";

function GetCategoiras({ category, handleAddItem, products }) {
  return (
    <div className="flex overflow-x-auto scroll-none">
      {products
        .filter((item) => item.category == category)
        .map((product, index) => {
          return (
            <div key={index} className="contend ">
              <FinalCardComponent
                {...product}
                product={product}
                
                onAddProduct={() => handleAddItem(product)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default GetCategoiras;
