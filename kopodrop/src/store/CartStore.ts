import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProducts } from "../types/products";

export interface CartItem extends IProducts {
  quantity: number;
}

interface CartStore {
  products: CartItem[];

  addToCart: (product: IProducts) => void;
  removeCart: (id: number) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],

      // ADD TO CART
      addToCart: (product) =>
        set((state) => {
          const existing = state.products.find(
            (item) => item.id === product.id
          );

          if (existing) {
            return {
              products: state.products.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            products: [
              ...state.products,
              { ...product, quantity: 1 },
            ],
          };
        }),

      // REMOVE ITEM COMPLETELY
      removeCart: (id) =>
        set((state) => ({
          products: state.products.filter(
            (item) => item.id !== id
          ),
        })),

      // INCREASE
      increaseQuantity: (id) =>
        set((state) => ({
          products: state.products.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      // DECREASE
      decreaseQuantity: (id) =>
        set((state) => ({
          products: state.products
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      // CLEAR CART
      clearCart: () =>
        set(() => ({
          products: [],
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);