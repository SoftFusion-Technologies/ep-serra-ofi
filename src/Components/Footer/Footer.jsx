import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import LogoSerraVertical from '../Img/logoNavBar.png';

const servicios = [
  'Sepelios y Cremaciones',
  'Salas Velatorias',
  'Traslados Nacionales',
  'Flota de Vehículos',
  'Afiliados y Planes',
  'Guía de Prestadores',
  'Afiliarse',
  'Portal de Autogestión',
  'Contacto'
];

const redes = [
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    url: 'https://www.instagram.com/empresa_enrique_serra/'
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=5438655660000&text&type=phone_number&app_absent=0'
  }
];

const contactos = [
  {
    icon: <FaPhoneAlt />,
    label: '0810 777 73772',
    sub: 'Urgencias 24hs',
    url: 'tel:081077773772'
  },
  {
    icon: <FaWhatsapp />,
    label: '3865 566000',
    sub: 'WhatsApp',
    url: 'https://wa.me/5438655660000'
  },
  {
    icon: <FaEnvelope />,
    label: 'info@empresaserra.com.ar',
    sub: 'Email',
    url: 'mailto:info@empresaserra.com.ar'
  },
  {
    icon: <FaMapMarkerAlt />,
    label: '24 de Septiembre 1.605, Concepción, Tucumán',
    sub: 'Dirección',
    url: 'https://goo.gl/maps/...'
  }
];

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-2 bg-gradient-to-br from-[#0c1121] via-[#101b31] to-[#090f1c] text-white overflow-hidden select-none">
      {/* Fondo decorativo galaxia */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-10vw] top-[-14vw] w-[32vw] h-[32vw] bg-[#3369b4] opacity-20 rounded-full blur-[110px]" />
        <div className="absolute right-[-15vw] bottom-[-7vw] w-[26vw] h-[22vw] bg-[#0a2a4d] opacity-20 rounded-full blur-[90px]" />
        {/* Estrellas */}
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1.5}px`,
              height: `${Math.random() * 2 + 1.5}px`,
              left: `${Math.random() * 98}%`,
              top: `${Math.random() * 90}%`,
              background: 'rgba(255,255,255,0.20)',
              opacity: Math.random() * 0.7 + 0.2,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.2fr] gap-8 md:gap-12 px-4 md:px-10">
        {/* Isla Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-white/5 border border-[#1d3866]/40 shadow-lg rounded-2xl p-4 mb-2 flex flex-col items-center backdrop-blur">
            <img
              src={LogoSerraVertical}
              alt="Logo Enrique Serra"
              className="h-14 mb-1 drop-shadow-xl"
              draggable={false}
            />
            <p className="font-medium text-base text-white/80 mb-2">
              Un respaldo confiable en cada momento.
              <br className="hidden md:inline" />
              <span className="font-bold text-[#4cb7ff]">
                Tranquilidad y apoyo.
              </span>
            </p>
          </div>
          {/* Redes sociales */}
          <div className="flex gap-4 mt-2">
            {redes.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1d3866] text-white hover:bg-[#4cb7ff] hover:text-[#0c1121] shadow p-3 transition-all animate-pulse-on-hover"
                aria-label={r.label}
                style={{ transition: 'box-shadow .18s' }}
              >
                {r.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Card Servicios Glassy */}
        <div className="relative rounded-2xl bg-white/5 shadow-xl border border-[#1d3866]/50 p-6 flex flex-col items-start backdrop-blur-lg">
          <h3 className="font-black text-lg mb-3 text-[#7bd7ff] tracking-wider">
            Servicios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 w-full">
            {servicios.map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-white/85 font-medium hover:text-[#7bd7ff] transition-colors"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#7bd7ff] opacity-80 animate-pulse" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Cards contacto glassy */}
        <div className="flex flex-col gap-4">
          {contactos.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4 p-4 rounded-2xl bg-white/10 shadow-lg border border-[#7bd7ff]/30
                hover:bg-[#1d3866]/50 hover:text-[#7bd7ff] transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7bd7ff]
                backdrop-blur-lg
              "
            >
              <span className="text-[#7bd7ff] bg-[#1d3866]/40 p-2 rounded-full text-2xl shadow-sm">
                {c.icon}
              </span>
              <span className="flex flex-col">
                <span className="font-bold text-base">{c.label}</span>
                <span className="text-xs text-white/50 opacity-80">
                  {c.sub}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Separador inferior wave SVG */}
      <div className="w-full mt-10 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L80 90.7C160 101 320 123 480 117.3C640 112 800 80 960 69.3C1120 59 1280 69 1360 74.7L1440 80V120H1360C1280 120 1120 120 960 120C800 120 640 120 480 120C320 120 160 120 80 120H0V80Z"
            fill="#090f1c"
          />
        </svg>
      </div>

      {/* Legal */}
      <div className="relative z-10 mt-2 pb-3 text-xs text-center text-white/50">
        © 2025 Enrique Serra. Todos los derechos reservados. &nbsp;|&nbsp;
        <a
          href="https://softfusion.com.ar/"
          className="text-[#7bd7ff] font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por SoftFusion
        </a>
      </div>

      {/* Animaciones pulse hover */}
      <style>
        {`
          .animate-pulse-on-hover:hover {
            animation: pulse 0.5s;
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 #4cb7ff55;}
            70% { box-shadow: 0 0 16px 8px #4cb7ff33;}
            100% { box-shadow: 0 0 0 0 #4cb7ff55;}
          }
        `}
      </style>
    </footer>
  );
}
