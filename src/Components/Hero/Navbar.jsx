import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ImgLogoNavBar from '../Img/logoNavBar.png';

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
            <Link
              key={item.to}
              to={item.to}
              className={`
        relative px-4 py-2 mx-1 font-bold font-display text-sm uppercase tracking-widest rounded-2xl
        transition-all duration-150
        ${
          isActive(item.to)
            ? 'bg-[#175CD3]/10 shadow-[0_2px_12px_0_#175CD326] text-[#175CD3] scale-105'
            : 'text-blue-600 hover:bg-blue-50 hover:text-[#175CD3] opacity-80'
        }
      `}
              style={{ letterSpacing: '0.09em' }}
            >
              {item.label}
              {isActive(item.to) && (
                <span className="absolute -inset-1 rounded-2xl border border-blue-200/50 pointer-events-none" />
              )}
            </Link>
          ))}
          {/* Botón CTA desktop */}
          <a
            href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-lg bg-[#175CD3] text-white font-bold text-sm shadow hover:bg-blue-700 transition-colors"
          >
            Portal Afiliados
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2 rounded-xl focus:outline-none"
          aria-label="Abrir menú"
        >
          <div className="flex flex-col justify-between w-8 h-8">
            <span
              className={`
                block h-1.5 w-full rounded-full transition-all duration-200
                ${open ? 'rotate-45 translate-y-2.5' : ''}
              `}
              style={{ backgroundColor: '#175CD3' }}
            ></span>
            <span
              className={`
                block h-1.5 w-full rounded-full transition-all duration-200
                ${open ? 'opacity-0' : ''}
              `}
              style={{ backgroundColor: '#175CD3' }}
            ></span>
            <span
              className={`
                block h-1.5 w-full rounded-full transition-all duration-200
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
            className="fixed top-0 right-0 z-50 bg-white/98 backdrop-blur-2xl shadow-2xl h-full w-72 flex flex-col"
          >
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#175CD3]"
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
            <nav className="flex flex-col gap-5 mt-24 ml-10 pr-8">
              {LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`
                    px-2 py-3 font-bold text-[#175CD3] text-lg uppercase tracking-wider rounded-xl
                    transition-all duration-150 active:bg-blue-100 hover:bg-blue-50
                    ${
                      isActive(item.to) ? 'opacity-100 underline' : 'opacity-80'
                    }
                  `}
                  style={{ letterSpacing: '0.12em' }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Botón CTA mobile */}
              <a
                href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 rounded-lg bg-[#175CD3] text-white font-bold text-base shadow hover:bg-blue-700 transition-colors text-center"
                onClick={() => setOpen(false)}
              >
                Portal Afiliados
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
