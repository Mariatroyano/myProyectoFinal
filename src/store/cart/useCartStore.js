import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addProducToCart: (newProduct) =>
        set((state) => ({ cart: [...state.cart, newProduct] })),
    }),
    {
      name: "CART",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
