import {
  FaRegHandshake,
  FaHome,
  FaCarSide,
  FaGlobeAmericas,
  FaMedal,
  FaPhoneAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticlesBackground from './ParticlesBackground';

const servicios = [
  {
    title: 'Organización Completa',
    desc: 'Asesoramiento y gestión de trámites, coordinación de ceremonias y atención personalizada.',
    icon: <FaRegHandshake size={40} />,
    color: '#79c8ff'
  },
  {
    title: 'Salas Velatorias Modernas',
    desc: 'Espacios acogedores y equipados con todas las comodidades para la despedida.',
    icon: <FaHome size={40} />,
    color: '#a8e2ff'
  },
  {
    title: 'Traslados Nacionales',
    desc: 'Gestionamos y realizamos traslados a cualquier punto del país con el máximo cuidado.',
    icon: <FaGlobeAmericas size={40} />,
    color: '#5fffd7'
  },
  {
    title: 'Flota Moderna',
    desc: 'Nuestra flota de vehículos garantiza puntualidad, seguridad y respeto en cada traslado.',
    icon: <FaCarSide size={40} />,
    color: '#8af7ff'
  },
  {
    title: 'Excelencia y Prestigio',
    desc: 'Más de 30 años siendo líderes, elegidos por miles de familias por nuestra calidez y trayectoria.',
    icon: <FaMedal size={40} />,
    color: '#4cc9f0'
  },
  {
    title: '¿Necesita Asistencia Inmediata?',
    desc: 'Estamos disponibles 24/7 para ayudarle.',
    icon: <FaPhoneAlt size={40} />,
    color: 'linear-gradient(120deg,#1876fa 60%,#4cc9f0 120%)',
    isAsistencia: true
  }
];

export default function ServiciosFune() {
  return (
    <section
      id="servicios"
      className="mt-32 relative py-20 bg-gradient-to-b from-[#12182a] via-[#17203a] to-[#13192c] text-white overflow-hidden"
    >
      <ParticlesBackground />

      {/* Burbujas decorativas - NO afectan layout */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-15vw] top-[-12vw] w-[40vw] h-[40vw] bg-[#2146b8] opacity-20 rounded-full blur-[120px]" />
        <div className="absolute right-[-13vw] bottom-[-7vw] w-[30vw] h-[30vw] bg-[#203362] opacity-20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black mb-7 text-center tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#71beff] via-[#a8e2ff] to-[#4cc9f0] animate-gradient-move">
            Servicios Memoriales
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mb-16 text-center">
          Nos encargamos de todo con{' '}
          <span className="font-bold text-[#71beff]">seriedad</span> y{' '}
          <span className="font-bold text-[#a8e2ff]">respeto</span>. Nuestro
          equipo está <span className="font-bold text-[#4cc9f0]">24/7</span>{' '}
          para acompañar a tu familia.
        </p>

        {/* Grid vertical mobile, horizontal desktop, sin scroll nunca */}
        <div
          className="
              w-full
              grid grid-cols-1
              md:grid-cols-3
              gap-8 md:gap-10
              pb-0
              overflow-visible
            "
        >
          {servicios.map((s, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div
                className={`
        group relative w-full 
        ${
          s.isAsistencia
            ? 'bg-gradient-to-br from-[#1876fa] via-[#32cafe] to-[#4cc9f0] text-white border-0'
            : 'bg-white/10 text-white border border-blue-200/20'
        }
        rounded-2xl shadow-xl backdrop-blur-lg 
        p-7 pb-10
        hover:shadow-2xl hover:scale-[1.035] transition-all duration-300
        flex flex-col items-center
      `}
                style={{
                  zIndex: 4 - i,
                  boxShadow:
                    i % 2 === 0
                      ? '0 4px 40px 0 #81c5f966'
                      : '0 4px 40px 0 #4cc9f060'
                }}
              >
                <div
                  className="mb-5 p-3 rounded-full"
                  style={{
                    background: s.isAsistencia
                      ? 'rgba(255,255,255,0.16)'
                      : `linear-gradient(120deg, ${s.color} 60%, #1d2742 120%)`,
                    boxShadow: `0 2px 12px 0 ${
                      s.isAsistencia ? '#fff8' : s.color + '99'
                    }`
                  }}
                >
                  <span className="animate-bounce-slow group-hover:scale-110 transition-transform duration-300 block">
                    {s.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-center tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-center mb-4">
                  {s.desc}
                </p>
                {s.isAsistencia && (
                  <a
                    href="tel:081077773772"
                    className="inline-block bg-white/90 text-[#1876fa] font-extrabold text-base px-7 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-[#1459ae] transition tracking-wide mt-2"
                  >
                    Llamar al 0810 777 SERRA
                  </a>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      {/* Animación de gradiente en el título */}
      <style>
        {`
            @keyframes gradient-move {
              0%,100% { background-position: 0% 50%;}
              50% { background-position: 100% 50%;}
            }
            .animate-gradient-move {
              background-size: 200% 200%;
              animation: gradient-move 7s ease-in-out infinite;
            }
            .animate-bounce-slow {
              animation: bounce 2.6s infinite;
            }
            @keyframes bounce {
              0%,100% { transform: translateY(0);}
              50% { transform: translateY(-10px);}
            }
          `}
      </style>
    </section>
  );
}

// Componente animador para cada card
function FadeInWhenVisible({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.16 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 42 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.62,
        delay
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
