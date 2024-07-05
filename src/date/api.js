export default async function api() {
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const products = await resp.json();
    return products;
}