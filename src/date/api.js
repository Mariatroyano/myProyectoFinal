export const fetchProducts = async () => {
    const response = await fetch('http://localhost:5814/productos');
    const data = await response.json();
    return data
};