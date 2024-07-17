
import React, { useEffect, useState } from 'react';
import { FinalCardComponent } from '../../basics/card/FinalCardComponent';
import './MainScreen.css';

function MainScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(resp => {
        console.log(resp);
        setProducts(resp);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addItem = (product) => {
    setAddedItems([...addedItems, product]);
  };

  const removeItem = (product) => {
    setAddedItems(addedItems.filter(item => item.id !== product.id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="card__body">
      {/* <h1></h1> */}
      <div className='contend'>
        {products.map(product => (
          <FinalCardComponent
            key={product.id}
            nombreProducto={product.title}
            icon={product.image}
            descripcion={product.description}
            precio={`$${product.price}`}
            product={product}
            addedItems={addedItems}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default MainScreen;

