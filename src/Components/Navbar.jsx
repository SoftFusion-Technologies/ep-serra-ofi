import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ImgLogoNavBar from './Img/logoNavBar.png';

const LINKS = [
  { label: 'INICIO', to: '/' },
  { label: 'SERVICIOS SOCIALES', to: '/servicios-sociales' },
  { label: 'SERVICIOS FÚNEBRES', to: '/servicios-funebres' },
  { label: 'CONTACTO', to: '/contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Helper para activo
  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed w-full top-0 z-50"
    >
      <nav
        className="
          bg-white/95 backdrop-blur-2xl shadow-soft border-b border-blue-100
          max-w-7xl mx-auto flex items-center justify-between
          px-5 sm:px-10 py-2.5 rounded-b-4xl relative
        "
      >
        {/* LOGO + Separador */}
        <Link to="/" className="flex items-center gap-4 select-none group">
          <motion.img
            src={ImgLogoNavBar}
            alt="Serra Logo"
            className="h-11 w-auto drop-shadow-lg transition-transform"
            whileHover={{ scale: 1.08, filter: 'brightness(1.1)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
          {/* Línea vertical glass con gradiente */}
          <span
            className="hidden md:inline-block w-1 h-10 rounded-full ml-3"
            style={{
              background: 'linear-gradient(180deg, #175CD3 0%, #06568f 100%)',
              opacity: 0.18
            }}
          />
        </Link>

        {/* LINKS Desktop */}
        <div className="hidden md:flex items-center gap-1 ml-6">
          {LINKS.map((item) => (
            <div key={item.to} className="relative flex items-center">
              <Link
                to={item.to}
                className={`
                  text-blue-600 px-4 py-2 mx-1 font-bold font-display text-sm uppercase tracking-widest
                  transition-all duration-150
                  ${
                    isActive(item.to)
                      ? 'opacity-100'
                      : 'opacity-70 hover:opacity-100'
                  }
                `}
                style={{ letterSpacing: '0.09em' }}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {isActive(item.to) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-3 right-3 -bottom-1 h-[3px] bg-primary rounded-full"
                    initial={{ opacity: 0, scaleX: 0.4 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.7 }}
                    transition={{ duration: 0.23 }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2 rounded-xl focus:outline-none"
          aria-label="Abrir menú"
        >
          <div className="flex flex-col justify-between w-8 h-8">
            <span
              className={`block h-1.5 w-full rounded-full bg-primary transition-all duration-200
                ${open ? 'rotate-45 translate-y-2.5' : ''}
              `}
              style={{ backgroundColor: '#175CD3' }}
            ></span>
            <span
              className={`block h-1.5 w-full rounded-full bg-primary transition-all duration-200
                ${open ? 'opacity-0' : ''}
              `}
              style={{ backgroundColor: '#175CD3' }}
            ></span>
            <span
              className={`block h-1.5 w-full rounded-full bg-primary transition-all duration-200
                ${open ? '-rotate-45 -translate-y-2.5' : ''}
              `}
              style={{ backgroundColor: '#175CD3' }}
            ></span>
          </div>
        </button>
      </nav>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="fixed top-0 right-0 z-50 bg-white/98 backdrop-blur-2xl shadow-2xl h-full w-64 flex flex-col"
          >
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-2 mt-24 ml-10">
              {LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`
                    px-4 py-2 font-bold font-display text-primary text-base uppercase tracking-widest transition-all duration-150
                    ${
                      isActive(item.to)
                        ? 'opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }
                  `}
                  style={{ letterSpacing: '0.14em' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
