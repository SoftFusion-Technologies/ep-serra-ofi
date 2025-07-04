import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import HeroDibujo from '../Img/hero-dibujo.svg';
import HeroDibujo2 from '../Img/service.svg';
import HeroDibujo3 from '../Img/family.svg';
import { Typewriter } from 'react-simple-typewriter';
import { FaClipboardList, FaEnvelopeOpenText } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const IMAGES = [
  { src: HeroDibujo, alt: 'Acompañamiento' },
  { src: HeroDibujo2, alt: 'Servicio' },
  { src: HeroDibujo3, alt: 'Familia' }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((i) => (i + 1) % IMAGES.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="-mt-10 relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-[#f5faff] px-3 md:px-0 py-6 overflow-hidden">
      {/* Mini frase institucional arriba */}
      <div className="absolute w-full flex justify-center top-3 md:top-7 z-30 pointer-events-none">
        <span className="mt-2 text-sm md:text-base text-blue-900/80 font-semibold bg-blue-100/60 px-4 py-1 rounded-full shadow-sm">
          Elegidos por miles de familias en Tucumán y el país.
        </span>
      </div>

      {/* Caja central, tipo card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-5xl bg-white/95 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-2 px-0 md:px-3 py-6 md:py-0 relative z-10 border border-blue-100"
      >
        {/* Imagen siempre arriba en mobile, a la izquierda en desktop */}
        <div className="flex-1 flex items-center justify-center min-h-[320px] md:min-h-[440px] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={IMAGES[current].src}
              src={IMAGES[current].src}
              alt={IMAGES[current].alt}
              className="w-60 xs:w-72 md:w-80 xl:w-96 drop-shadow-xl rounded-3xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              draggable="false"
            />
          </AnimatePresence>
          {/* Separador vertical desktop */}
          <div className="hidden md:block absolute right-[-15px] top-10 h-[75%] w-[3px] bg-gradient-to-b from-[#175CD3] via-blue-300 to-white/0 rounded-full opacity-40" />
        </div>
        {/* Contenido */}
        <div className="w-full md:w-[52%] flex flex-col justify-center items-center md:items-start px-4 md:px-8 py-6 md:py-12 relative">
          {/* Badge de confianza */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="md:hidden absolute -top-7 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bg-blue-50 text-blue-900 font-semibold px-5 py-1 rounded-full shadow text-xs md:text-sm"
          >
            Atención 24/7 • +70 años de trayectoria
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-center md:text-left relative"
            style={{
              color: '#175CD3',
              fontFamily: "'Space Grotesk', Montserrat, sans-serif",
              letterSpacing: '-1px',
              maxWidth: '28rem',
              lineHeight: 1.15
            }}
          >
            Un respaldo confiable <br />
            <span className="text-black font-bold relative z-10">
              en cada momento
              {/* Underline SVG animado */}
              <svg
                viewBox="0 0 230 14"
                className="w-32 md:w-44 absolute left-1/2 md:left-0 -bottom-3 -translate-x-1/2 md:translate-x-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ pointerEvents: 'none' }}
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  d="M4 7Q44 17 112 7Q181 -2 226 7"
                  stroke="#175CD3"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.h1>
          <p
            className="text-base xs:text-lg md:text-xl font-medium text-gray-700 mb-7 mt-3 text-center md:text-left"
            style={{
              fontFamily: "'Montserrat', Inter, sans-serif",
              maxWidth: '29rem'
            }}
          >
            <Typewriter
              words={[
                'Nos dedicamos con profunda vocación a brindar servicios fúnebres integrales y un respaldo completo a tu familia, ofreciendo tranquilidad y apoyo cuando más lo necesitan.'
              ]}
              loop={1} // Se tipea una sola vez
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={0} // Nunca borra el texto
            />
          </p>
          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.44, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 mb-5 w-full sm:w-auto justify-center md:justify-start items-center sm:items-stretch"
          >
            {/* Botón 1 */}
            <motion.a
              href="#planes"
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px 0 #175CD340' }}
              whileTap={{ scale: 0.97 }}
              className="
      group relative inline-flex items-center gap-2 px-7 py-3 rounded-full
      bg-[#175CD3] text-white font-bold text-base shadow-lg
      hover:bg-[#1e62f2] transition-all duration-200
      focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/40
      active:shadow-inner
      overflow-hidden
    "
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="text-xl group-hover:animate-bounce">
                <FaClipboardList />
              </span>
              <span>Conocé Nuestros Planes</span>
            </motion.a>
            {/* Botón 2 */}
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.05,
                borderColor: '#184cba',
                color: '#184cba',
                backgroundColor: '#f0f6ff'
              }}
              whileTap={{ scale: 0.97, borderColor: '#175CD3' }}
              className="
      group relative inline-flex items-center gap-2 px-7 py-3 rounded-full
      border border-[#175CD3] text-[#175CD3] font-bold text-base bg-white
      hover:bg-blue-50 transition-all duration-200 text-center
      focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200/40
      active:shadow-inner
      overflow-hidden
    "
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                <FaEnvelopeOpenText />
              </span>
              <span>Contactar</span>
            </motion.a>
          </motion.div>
          {/* Box contacto directo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: 'easeOut' }}
            className="
    w-full max-w-md mx-auto rounded-2xl bg-white/80 border border-blue-100 
    flex flex-col divide-y divide-blue-100 shadow-sm"
          >
            {/* Teléfono */}
            <a
              href="tel:081077773772"
              className="
      flex items-center gap-3 px-5 py-4 text-blue-900 hover:text-[#175CD3]
      hover:bg-blue-50/60 transition-all duration-150 text-base font-semibold
      rounded-t-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200
    "
              tabIndex={0}
              aria-label="Llamar a Urgencias 24hs"
            >
              <FaPhoneAlt className="text-2xl" />
              <span>Urgencias 24hs:</span>
              <span className="font-bold ml-auto">0810 777 73772</span>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/5438655660000"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center gap-3 px-5 py-4 text-green-700 hover:text-[#22C55E]
      hover:bg-green-50/40 transition-all duration-150 text-base font-semibold
      rounded-b-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200
    "
              tabIndex={0}
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp:</span>
              <span className="font-bold  decoration-dotted ml-auto">
                3865 566000
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
