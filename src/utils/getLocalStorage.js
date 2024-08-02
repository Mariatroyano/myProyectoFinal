export default function getLocalStorage (){
    const cart = JSON.parse(localStorage.getItem('CART_PRODUCTS') ?? '[]') ;
    return cart
}