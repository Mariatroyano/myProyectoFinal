export const fetchProducts = async () => {
    const response = await fetch('http://localhost:5813/productos');
    const data = await response.json();
    return data
};