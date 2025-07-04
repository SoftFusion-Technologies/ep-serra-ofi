import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

export default function ContactoSection() {
  return (
    <section
      id="contacto"
      className="relative py-24 bg-gradient-to-br from-[#19233d] via-[#1d2842] to-[#171c24] text-white overflow-hidden"
    >
      <ParticlesBackground></ParticlesBackground>
      {/* Fondo decorativo (puede ser Particles o shapes animados) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-10vw] top-[-12vw] w-[38vw] h-[38vw] bg-[#175CD3] opacity-15 rounded-full blur-[120px]" />
        <div className="absolute right-[-8vw] bottom-[-7vw] w-[24vw] h-[24vw] bg-[#5bdfff] opacity-10 rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="uppercase text-4xl md:text-5xl font-black mb-5 font-heading bg-clip-text text-transparent bg-gradient-to-r from-[#3ccaff] via-white to-[#175cd3]">
            Estamos aquí para <span className="text-white/80">acompañarte</span>
          </h2>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto font-medium">
            Contactanos y descubrí el plan que mejor se adapta a vos y a tu
            familia.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda: info rápida */}
          <div className="space-y-6">
            <ContactoInfo
              icon={<FaPhoneAlt className="text-cyan-400 text-2xl" />}
              title="Servicio Fúnebre (24hs)"
              value="0810 777 73772"
              href="tel:081077773772"
            />
            <ContactoInfo
              icon={<FaWhatsapp className="text-green-400 text-2xl" />}
              title="WhatsApp"
              value="3865 566000"
              href="https://wa.me/5438655660000"
              ext
            />
            <ContactoInfo
              icon={<FaEnvelope className="text-blue-300 text-2xl" />}
              title="Email"
              value="info@empresaserra.com.ar"
              href="mailto:info@empresaserra.com.ar"
              ext
            />
            <ContactoInfo
              icon={<FaMapMarkerAlt className="text-yellow-200 text-2xl" />}
              title="Casa Central"
              value="24 de Septiembre 1.605, Concepción, Tucumán"
              href="https://maps.app.goo.gl/fQy3JkUUXTLfNADb6"
              ext
            />
          </div>
          {/* Columna derecha: Formulario */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative bg-white/5 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100/30 backdrop-blur-md flex flex-col gap-5"
            style={{ zIndex: 1 }}
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault(); /* tu lógica aquí */
            }}
          >
            <h3 className="text-2xl font-black text-white mb-4 font-heading text-center">
              Envíanos tu consulta
            </h3>
            <FloatInput
              label="Nombre completo"
              name="nombre"
              type="text"
              autoComplete="name"
            />
            <FloatInput
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <FloatTextarea label="Tu mensaje..." name="mensaje" />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: '#3ccaff' }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 mt-2 bg-[#175CD3] hover:bg-[#3ccaff] rounded-2xl text-lg font-black text-white shadow transition-all"
              style={{
                letterSpacing: '0.04em'
              }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
      {/* Animación de gradiente del título */}
      <style>
        {`
        .gradient-text {
          background: linear-gradient(90deg, #3ccaff, #fff 40%, #175cd3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        `}
      </style>
    </section>
  );
}

// Componente de campo flotante
function FloatInput({ label, ...props }) {
  return (
    <div className="relative mb-1">
      <input
        {...props}
        required
        className="peer w-full bg-transparent border-0 border-b-2 border-blue-100/40 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 py-3 px-1 text-lg transition-all"
        placeholder=" "
      />
      <label className="absolute left-1 top-2 text-blue-100/70 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-200">
        {label}
      </label>
    </div>
  );
}

function FloatTextarea({ label, ...props }) {
  return (
    <div className="relative mb-1">
      <textarea
        {...props}
        required
        rows={4}
        className="peer w-full bg-transparent border-0 border-b-2 border-blue-100/40 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 py-3 px-1 text-lg transition-all resize-none"
        placeholder=" "
      />
      <label className="absolute left-1 top-2 text-blue-100/70 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-200">
        {label}
      </label>
    </div>
  );
}

// Componente para cada contacto
function ContactoInfo({ icon, title, value, href, ext }) {
  return (
    <motion.div
      whileHover={{ scale: 1.045, backgroundColor: '#193158' }}
      className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 border border-blue-100/30 shadow hover:shadow-lg transition-all"
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
    >
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <div className="font-black text-lg text-white/90">{title}</div>
        {href ? (
          <a
            href={href}
            target={ext ? '_blank' : undefined}
            rel={ext ? 'noopener noreferrer' : undefined}
            className="text-blue-200 hover:text-white text-xl font-bold break-all transition-colors"
          >
            {value}
          </a>
        ) : (
          <div className="text-blue-100 text-lg">{value}</div>
        )}
      </div>
    </motion.div>
  );
}
