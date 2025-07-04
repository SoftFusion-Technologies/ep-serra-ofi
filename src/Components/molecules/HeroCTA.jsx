import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function HeroCTA() {
  return (
    <div className="flex gap-4 mt-3 flex-col xs:flex-row w-full xs:w-auto">
      <motion.a
        href="tel:+543865555555"
        whileHover={{ scale: 1.04, backgroundColor: '#fc4b08' }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all"
        aria-label="Llamar ahora"
      >
        <FaPhoneAlt />
        Llamar ahora
      </motion.a>
      <motion.a
        href="https://wa.me/543865555555"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, backgroundColor: '#25d366' }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 transition-all"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        WhatsApp
      </motion.a>
    </div>
  );
}
