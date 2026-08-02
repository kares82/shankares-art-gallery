import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Artwork, CartItem } from '@/types/artwork';
import { FRAME_PRICE } from '@/data/artworks';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (artwork: Artwork, framed?: boolean) => void;
  removeItem: (artworkId: string) => void;
  updateFrame: (artworkId: string, framed: boolean) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  itemCount: number;
  subtotal: number;
}

// Default values to prevent HMR issues
const defaultContextValue: CartContextType = {
  items: [],
  isOpen: false,
  addItem: () => {},
  removeItem: () => {},
  updateFrame: () => {},
  clearCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
  itemCount: 0,
  subtotal: 0,
};

const CartContext = createContext<CartContextType>(defaultContextValue);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((artwork: Artwork, framed: boolean = false) => {
    setItems(prev => {
      const exists = prev.find(item => item.artwork.id === artwork.id);
      if (exists) return prev;
      return [...prev, { artwork, framed, framePrice: framed ? FRAME_PRICE : 0 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((artworkId: string) => {
    setItems(prev => prev.filter(item => item.artwork.id !== artworkId));
  }, []);

  const updateFrame = useCallback((artworkId: string, framed: boolean) => {
    setItems(prev =>
      prev.map(item =>
        item.artwork.id === artworkId
          ? { ...item, framed, framePrice: framed ? FRAME_PRICE : 0 }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen(prev => !prev), []);

  const itemCount = items.length;
  const subtotal = items.reduce(
    (sum, item) => sum + item.artwork.price + item.framePrice,
    0
  );

  const value = useMemo(() => ({
    items,
    isOpen,
    addItem,
    removeItem,
    updateFrame,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    itemCount,
    subtotal,
  }), [items, isOpen, addItem, removeItem, updateFrame, clearCart, openCart, closeCart, toggleCart, itemCount, subtotal]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  return useContext(CartContext);
};
