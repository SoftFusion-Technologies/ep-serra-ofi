import { motion } from 'framer-motion';
import AnimatedBlob from './visuals/AnimatedBlob';
import ParticlesBg from './visuals/ParticlesBg';
import HeroCTA from './molecules/HeroCTA';
import IlustracionFamilia from './Img/hero-dibujo.svg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-[#f5f7fb] via-[#eaf0fa] to-[#dae7fa] overflow-hidden px-6 md:px-0">
      {/* Background visuals */}
      <AnimatedBlob />
      <ParticlesBg />

      {/* Left: TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start z-10"
      >
        <div className="text-accent font-bold text-lg animate-fadeInUp">
          Más de{' '}
          <span className="font-extrabold text-2xl text-primary">70 años</span>{' '}
          de confianza
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-tight text-primary drop-shadow mb-3 text-center md:text-left">
          Protegemos{' '}
          <span className="text-accent font-handwrite">a tu familia</span>
        </h1>
        <p className="text-zinc-700 text-lg md:text-2xl font-medium text-center md:text-left max-w-lg mb-2">
          Servicios sociales y fúnebres de{' '}
          <span className="font-bold text-accent">excelencia</span>.<br />
          Atención personalizada <span className="text-primary">24/7</span>.
        </p>
        <HeroCTA />
      </motion.div>

      {/* Right: ILUSTRACIÓN */}
      <motion.img
        src={IlustracionFamilia}
        alt="Familia protegida"
        className="w-[290px] md:w-[410px] drop-shadow-2xl z-10 select-none"
        initial={{ scale: 0.94, opacity: 0, x: 70 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.55 }}
        draggable="false"
      />
    </section>
  );
}
