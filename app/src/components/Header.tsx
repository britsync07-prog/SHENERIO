import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV = [
  { to: '/shop', label: 'SHOP' },
  { to: '/formulation', label: 'FORMULATION' },
  { to: '/our-philosophy', label: 'OUR PHILOSOPHY' },
  { to: '/the-ritual', label: 'THE RITUAL' },
]

export default function Header({ onSearch }: { onSearch: () => void }) {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-[0_1px_0_0_hsl(var(--border))] backdrop-blur-sm' : 'bg-white'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          {/* left: mobile menu / desktop nav first half */}
          <div className="flex flex-1 items-center gap-6">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center -ml-2 md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {NAV.slice(0, 2).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[11px] font-normal tracking-luxe-sm transition-opacity duration-300 hover:opacity-50 ${
                      isActive ? 'underline underline-offset-8 decoration-1' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* centre: brand */}
          <Link to="/" className="group flex flex-col items-center" aria-label="SHENERIO London — home">
            <span className="font-display text-[22px] font-medium leading-none tracking-[0.28em] md:text-[26px]">
              SHENERIO
            </span>
            <span className="mt-1 text-[9px] font-light tracking-[0.55em] text-[hsl(var(--ink-soft))] transition-opacity duration-300 group-hover:opacity-60">
              LONDON
            </span>
          </Link>

          {/* right: nav second half + actions */}
          <div className="flex flex-1 items-center justify-end gap-2 md:gap-6">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary continued">
              {NAV.slice(2).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[11px] font-normal tracking-luxe-sm transition-opacity duration-300 hover:opacity-50 ${
                      isActive ? 'underline underline-offset-8 decoration-1' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              aria-label="Search"
              onClick={onSearch}
              className="inline-flex h-11 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-50"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label={`Open bag, ${count} item${count === 1 ? '' : 's'}`}
              onClick={openCart}
              className="relative inline-flex h-11 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-50"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
              {count > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[hsl(var(--ink))] px-1 text-[9px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-display text-lg tracking-[0.28em]">SHENERIO</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-8 pt-10" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="border-b border-[hsl(var(--border))] py-5 font-display text-3xl font-light tracking-wide"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/journal" className="border-b border-[hsl(var(--border))] py-5 font-display text-3xl font-light tracking-wide">
              THE JOURNAL
            </NavLink>
            <NavLink to="/contact" className="py-5 font-display text-3xl font-light tracking-wide">
              CONTACT
            </NavLink>
          </nav>
        </div>
      )}
    </>
  )
}
