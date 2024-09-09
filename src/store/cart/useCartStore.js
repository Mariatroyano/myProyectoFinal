

import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      // Función para añadir un producto al carrito
      addProductToCart: (newProduct) =>
        set((state) => ({ cart: [...state.cart, newProduct] })),
      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter(item => item.id !== id),
        })),
    }),
    {
      name: "CART", // Nombre del storage en localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;

