import { motion } from 'framer-motion';
import { FaShieldAlt, FaGift, FaChevronRight } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

// Blob SVG animado
const Blob = () => (
  <svg
    className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[320px] blur-2xl opacity-60 pointer-events-none"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'url(#goo)' }}
  >
    <defs>
      <radialGradient id="blobColor" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a8e2ff" />
        <stop offset="100%" stopColor="#175CD3" />
      </radialGradient>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
    <motion.path
      d="M325,156Q347,212,283,232Q219,252,181,229.5Q143,207,106.5,181Q70,155,108,114Q146,73,199,60.5Q252,48,296,86Q340,124,325,156Z"
      fill="url(#blobColor)"
      initial={{ scale: 0.98 }}
      animate={{ scale: [0.98, 1.05, 0.99] }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 7,
        ease: 'easeInOut'
      }}
    />
  </svg>
);

const beneficios = [
  {
    icon: (
      <motion.div
        whileHover={{ rotate: 12, scale: 1.18 }}
        transition={{ type: 'spring', stiffness: 250 }}
        className="inline-block"
      >
        <FaShieldAlt className="text-blue-600" size={34} />
      </motion.div>
    ),
    title: 'Cobertura Fúnebre Completa',
    desc: 'Tranquilidad total: cubrimos todos los servicios esenciales, liberando a tu familia de cargas económicas.'
  },
  {
    icon: (
      <motion.div
        whileHover={{ rotate: -12, scale: 1.16 }}
        transition={{ type: 'spring', stiffness: 250 }}
        className="inline-block"
      >
        <MdHealthAndSafety className="text-rose-500" size={34} />
      </motion.div>
    ),
    title: 'Beneficios en Salud y Bienestar',
    desc: 'Descuentos y acceso preferencial a consultas médicas, odontológicas y otros profesionales destacados.'
  },
  {
    icon: (
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 260 }}
        className="inline-block"
      >
        <FaGift className="text-amber-500" size={34} />
      </motion.div>
    ),
    title: 'Obsequios Exclusivos',
    desc: 'Valoramos tu confianza con obsequios y ventajas especiales incluidos en cada plan.'
  }
];

const trail = [
  'Planes',
  'de',
  'Afiliación:',
  'Beneficios',
  'para',
  'Hoy,',
  'Tranquilidad',
  'para',
  'Mañana'
];

export default function PlanesAfiliacion() {
  return (
    <section
      id="planes"
      className="relative bg-gradient-to-br from-[#eaf3fb] via-white to-[#d4e4f7] py-20 overflow-hidden flex items-center"
    >
      <Blob />
      {/* Fondo partículas o efecto extra (opcional) */}
      {/* <ParticlesBackground /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-14 items-center">
        {/* Beneficios cards */}
        <div className="flex flex-col gap-8 w-full relative">
          {/* Superposición de brillo */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0.19, 0.22, 0.13, 0.19],
              scale: [1, 1.11, 0.98, 1]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-60 h-40 rounded-full bg-blue-100 blur-2xl opacity-30 pointer-events-none"
          />
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: 0.14 * i,
                duration: 0.8,
                type: 'spring'
              }}
              className="
                relative flex items-start gap-6 bg-white/90 glassy border border-blue-100/40 
                rounded-2xl shadow-2xl hover:shadow-blue-200 transition-all duration-400
                px-7 py-7
                overflow-hidden group"
              style={{
                backdropFilter: 'blur(6px)'
              }}
            >
              {/* Reflejo */}
              <span className="absolute right-5 -top-2 w-20 h-10 bg-gradient-to-r from-white/70 to-white/0 rounded-full opacity-60 blur-md pointer-events-none" />
              {/* Icono */}
              <div className="flex-shrink-0 mt-2">{b.icon}</div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-slate-800 mb-1 font-heading">
                  {b.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {b.desc}
                </p>
              </div>
              {/* Halo animado */}
              <span className="absolute -bottom-4 -right-6 w-14 h-14 bg-blue-200 group-hover:opacity-40 rounded-full opacity-0 blur-xl transition" />
            </motion.div>
          ))}
        </div>

        {/* Panel lateral: título, texto, CTA */}
        <div className="relative flex flex-col items-center lg:items-start w-full">
          {/* Trail title animado */}
          <div className="mb-5 flex flex-wrap gap-x-2 gap-y-1">
            {trail.map((word, idx) => (
              <motion.span
                key={word + idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.09 * idx,
                  duration: 0.54,
                  type: 'spring'
                }}
                viewport={{ once: true }}
                className="inline-block text-[2rem] md:text-[2.8rem] font-black tracking-tight leading-tight text-[#175CD3] font-heading"
                style={{ lineHeight: 1.13 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-600 mb-7 leading-relaxed max-w-lg"
          >
            Nuestros planes están diseñados para brindarte seguridad y, al mismo
            tiempo, ventajas exclusivas para mejorar tu día a día. Con una cuota
            mensual accesible, vos y tu familia acceden a un mundo de
            posibilidades.
          </motion.p>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-2 w-full"
          >
            <button className="inline-flex items-center justify-center h-12 rounded-full px-9 bg-[#175CD3] text-white hover:bg-[#1250b7] font-bold shadow transition-colors duration-200 text-base text-center">
              Conocé Nuestros Planes
              <FaChevronRight className="ml-2" />
            </button>
            <a
              href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 rounded-full px-9 border bg-white border-[#175CD3] text-[#175CD3] hover:bg-[#175CD3] hover:text-white font-bold shadow transition-colors duration-200 text-base text-center"
            >
              Guía de Prestadores
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-12 rounded-full px-9 text-[#175CD3] hover:bg-blue-50 font-bold shadow transition-colors duration-200 text-base text-center"
            >
              Afiliate Ahora
            </a>
          </motion.div>
        </div>
      </div>
      {/* Glassy + animaciones extra */}
      <style>
        {`
          .glassy {
            background: linear-gradient(120deg,rgba(255,255,255,0.92) 60%,rgba(199,224,255,0.85) 120%);
            box-shadow: 0 8px 60px 0 #93c8ff33;
          }
        `}
      </style>
    </section>
  );
}
