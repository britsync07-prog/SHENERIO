import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import SearchOverlay from '@/components/SearchOverlay'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductPage from '@/pages/Product'
import Formulation from '@/pages/Formulation'
import Philosophy from '@/pages/Philosophy'
import Ritual from '@/pages/Ritual'
import Journal from '@/pages/Journal'
import Faq from '@/pages/Faq'
import Contact from '@/pages/Contact'
import Checkout from '@/pages/Checkout'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <CartProvider>
      <div className="flex min-h-[100dvh] flex-col bg-white text-[hsl(var(--ink))]">
        <Header onSearch={() => setSearchOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/formulation" element={<Formulation />} />
            <Route path="/our-philosophy" element={<Philosophy />} />
            <Route path="/the-ritual" element={<Ritual />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </CartProvider>
  )
}
