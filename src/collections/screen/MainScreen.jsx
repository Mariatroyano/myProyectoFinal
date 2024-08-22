import { FinalCardComponent } from '../../basics/card/FinalCardComponent';
import './MainScreen.css'
import { useEffect, useState } from 'react'


function MainScreen() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(resp => {
        console.log(resp);
        setProducts(resp);
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])


  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
  <div>
    <h1>Productos</h1>
    <ul className='contend'>
      {products.map(product => (
        <FinalCardComponent
        nombreProducto={product.category}
        icon={product.image}
        desacripcion={product.description}
        precio={product.price}
        />
      ))}
    </ul>
  </div>
  )
}

export default MainScreen

