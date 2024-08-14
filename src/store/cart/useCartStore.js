import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addProducToCart: (newProduct) =>
        set((state) => ({ cart: [...state.cart, newProduct] })),
      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter(item => item.id !== id),
        })),
    }),
    {
      name: "CART",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
