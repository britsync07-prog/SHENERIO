import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products, type Product } from '@/data/products'

export interface CartLine {
  productId: string
  qty: number
}

interface CartContextValue {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  add: (productId: string, qty?: number) => void
  remove: (productId: string) => void
  setQty: (productId: string, qty: number) => void
  clear: () => void
  productFor: (id: string) => Product | undefined
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'shenerio-cart-v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartLine[]) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* storage unavailable */
    }
  }, [lines])

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0)
    const subtotal = lines.reduce((s, l) => {
      const p = products.find((p) => p.id === l.productId)
      return s + (p ? p.price * l.qty : 0)
    }, 0)
    return {
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add: (productId, qty = 1) =>
        setLines((prev) => {
          const found = prev.find((l) => l.productId === productId)
          if (found) return prev.map((l) => (l.productId === productId ? { ...l, qty: l.qty + qty } : l))
          return [...prev, { productId, qty }]
        }),
      remove: (productId) => setLines((prev) => prev.filter((l) => l.productId !== productId)),
      setQty: (productId, qty) =>
        setLines((prev) =>
          qty <= 0 ? prev.filter((l) => l.productId !== productId) : prev.map((l) => (l.productId === productId ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
      productFor: (id) => products.find((p) => p.id === id),
    }
  }, [lines, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
