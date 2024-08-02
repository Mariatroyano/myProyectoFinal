export default function setLocalStorage (cart) {
    localStorage.setItem('CART_PRODUCTS', JSON.stringify(cart ?? []))
}