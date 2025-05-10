import React, { createContext, useContext, useState, useEffect } from "react";
import type { CartItem } from "../types";
import { loadCartFromStorage, saveCartToStorage } from "../utils/storage";

interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = loadCartFromStorage();
    setCart(stored);
  }, []);

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addItem = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p);
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => setCart((prev) => prev.filter(item => item.id !== id));
  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
