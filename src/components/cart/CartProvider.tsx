"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PACKAGES, findPackage, type PackageId } from "@/lib/packages";

// Panier persistant (localStorage) — façon boutique : on ajoute des forfaits,
// on ajuste les quantités, puis un seul paiement pour l'ensemble une fois le
// nouveau processeur de paiement intégré.
// Le drawer latéral (CartDrawer) s'ouvre à l'ajout et via le bouton du header.
const STORAGE_KEY = "angelikajanosikova_cart_v1";
const MAX_QTY = 10;

export type CartItem = { id: PackageId; qty: number };

type CartContextValue = {
  items: CartItem[];
  ready: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (id: PackageId) => void;
  has: (id: PackageId) => boolean;
  setQty: (id: PackageId, qty: number) => void;
  remove: (id: PackageId) => void;
  clear: () => void;
  count: number;
  totalCents: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const clean = parsed
            .filter(
              (it): it is CartItem =>
                typeof it === "object" &&
                it !== null &&
                typeof (it as CartItem).id === "string" &&
                findPackage((it as CartItem).id) !== undefined,
            )
            .map((it) => ({ id: it.id, qty: Math.min(Math.max(1, Math.floor(it.qty)), MAX_QTY) }));
          setItems(clean);
        }
      }
    } catch {
      // panier illisible : on repart de zéro
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // stockage indisponible : le panier vit seulement pour la session
    }
  }, [items, ready]);

  const add = useCallback((id: PackageId) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === id);
      if (existing) {
        return prev.map((it) =>
          it.id === id ? { ...it, qty: Math.min(it.qty + 1, MAX_QTY) } : it,
        );
      }
      return [...prev, { id, qty: 1 }];
    });
  }, []);

  const has = useCallback((id: PackageId) => items.some((it) => it.id === id), [items]);

  const setQty = useCallback((id: PackageId, qty: number) => {
    setItems((prev) =>
      prev
        .map((it) =>
          it.id === id ? { ...it, qty: Math.min(Math.max(1, Math.floor(qty)), MAX_QTY) } : it,
        )
        .filter((it) => it.qty > 0),
    );
  }, []);

  const remove = useCallback((id: PackageId) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const { count, totalCents } = useMemo(() => {
    let c = 0;
    let t = 0;
    for (const it of items) {
      const pkg = findPackage(it.id);
      if (!pkg) continue;
      c += it.qty;
      t += pkg.amount * it.qty;
    }
    return { count: c, totalCents: t };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      ready,
      isOpen,
      openCart,
      closeCart,
      add,
      has,
      setQty,
      remove,
      clear,
      count,
      totalCents,
    }),
    [items, ready, isOpen, openCart, closeCart, add, has, setQty, remove, clear, count, totalCents],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
  return ctx;
}

export { MAX_QTY, PACKAGES };
