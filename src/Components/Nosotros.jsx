import {
  FaRegIdBadge,
  FaHeart,
  FaShieldAlt,
  FaLightbulb
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const motivos = [
  {
    icon: <FaRegIdBadge size={50} className="text-blue-700 drop-shadow" />,
    titulo: 'Experiencia y Profesionalismo',
    desc: 'Décadas de trayectoria en el sector, brindando un servicio de excelencia y confianza.'
  },
  {
    icon: <FaHeart size={50} className="text-pink-500 drop-shadow" />,
    titulo: 'Atención Humana y Empática',
    desc: 'Entendemos y respetamos el dolor, ofreciendo un trato cálido, personalizado y con discreción.'
  },
  {
    icon: <FaShieldAlt size={50} className="text-amber-500 drop-shadow" />,
    titulo: 'Transparencia y Confianza',
    desc: 'Contratos claros, sin letra chica, para tu total tranquilidad y seguridad.'
  },
  {
    icon: <FaLightbulb size={50} className="text-green-400 drop-shadow" />,
    titulo: 'Innovación y Flexibilidad',
    desc: 'Planes adaptados a las nuevas realidades y beneficios pensados para toda la familia.'
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 22 }
  }
};

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative py-20 px-2 sm:px-6 md:px-0 bg-gradient-to-br from-[#eaf1fc] via-[#dce8fa] to-[#f5faff] overflow-hidden"
    >
      {/* Blobs animados */}
      <div className="absolute -top-28 -left-28 w-[330px] h-[330px] rounded-full bg-blue-100/60 blur-[120px] z-0 animate-blob" />
      <div className="absolute -bottom-32 right-0 w-[230px] h-[230px] rounded-full bg-[#90e0ff]/40 blur-[110px] z-0 animate-blob2" />

      {/* Título con subrayado animado */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.08 }}
          viewport={{ once: true }}
          className="inline-block text-4xl md:text-5xl font-black mb-2 bg-clip-text text-transparent
          bg-gradient-to-r from-[#052b51] via-[#1bb5e9] to-[#1763ad] relative"
          style={{ WebkitTextStroke: '1px #13449d30', letterSpacing: '-1px' }}
        >
          ¿Por Qué Elegir Enrique Serra?
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.38, duration: 0.62, type: 'spring' }}
            viewport={{ once: true }}
            className="block h-[6px] bg-gradient-to-r from-blue-400/80 via-blue-300/70 to-transparent rounded-full w-[70%] mx-auto mt-2 origin-left"
          />
        </motion.h2>
      </div>

      {/* Grid animada de cards */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {motivos.map((m, i) => (
          <motion.div
            variants={item}
            key={i}
            tabIndex={0}
            className={`
              group bg-white/85 rounded-3xl shadow-xl border-2 border-blue-100/60
              backdrop-blur-xl p-8 flex flex-col items-center text-center
              transition-all duration-300 focus-visible:ring-4 focus-visible:ring-blue-200/60
              hover:shadow-blue-200/50 hover:scale-[1.042] hover:border-blue-400
              hover:-translate-y-2
              relative
              ring-offset-2 outline-none
            `}
            whileHover={{
              boxShadow: '0 12px 60px 0 #6cc6ff35, 0 0 0 3px #2280d950'
            }}
            whileFocus={{ scale: 1.052, borderColor: '#247cfc' }}
          >
            <div className="mb-7 flex items-center justify-center">
              <div
                className="p-4 rounded-full shadow-xl border border-blue-200/40 bg-blue-50/50 group-hover:bg-blue-100/90 transition-all duration-300"
                style={{
                  boxShadow: '0 3px 20px 0 #e0f2ff60',
                  transition: 'box-shadow 0.24s cubic-bezier(.42,0,.58,1)'
                }}
              >
                {m.icon}
              </div>
            </div>
            <h3
              className="text-xl font-extrabold mb-2 text-blue-900 drop-shadow"
              style={{ letterSpacing: '-.03em' }}
            >
              {m.titulo}
            </h3>
            <p className="text-blue-800/80 font-semibold leading-relaxed text-[1.08rem] min-h-[60px]">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Animaciones blobs */}
      <style>
        {`
        @keyframes blob { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-26px) scale(1.07);} }
        .animate-blob { animation: blob 8s ease-in-out infinite alternate; }
        @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(18px) scale(1.06);} }
        .animate-blob2 { animation: blob2 7.5s ease-in-out infinite alternate; }
        `}
      </style>
    </section>
  );
}
