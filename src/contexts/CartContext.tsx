import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  title: string;
  slug: string;
  priceUSD: number;
  instructor: string;
  duration: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => false,
});

export const useCart = () => useContext(CartContext);

export type { CartItem };

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => (prev.find((i) => i.id === item.id) ? prev : [...prev, item]));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);
  const isInCart = (id: string) => items.some((i) => i.id === id);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
