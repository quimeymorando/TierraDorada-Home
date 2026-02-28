import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AgenciaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { label: 'Esencia', toPath: '/agencia/esencia', href: null },
    { label: 'Servicios', toPath: '/agencia/servicios', href: null },
    { label: 'Contacto', toPath: null, href: 'https://wa.me/5492214592926' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0B1628]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/agencia" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#9A7A2A] flex items-center justify-center shadow-lg shadow-[#C9A84C]/20 group-hover:shadow-[#C9A84C]/40 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#0B1628]" />
            </div>
            <span className="font-playfair text-white text-sm md:text-base font-semibold tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300">
              Agencia <span className="text-agencia-gold">Tierra Dorada</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.toPath ? (
                <Link
                  key={link.label}
                  to={link.toPath}
                  className="font-inter text-white/70 text-sm hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C] to-[#22D3EE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href!}
                  className="font-inter text-white/70 text-sm hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C] to-[#22D3EE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            )}
            <a
              href="https://wa.me/5492214592926" target="_blank" rel="noopener noreferrer"
              className="glow-gold font-inter text-xs font-semibold tracking-widest uppercase border border-[#C9A84C]/60 text-[#C9A84C] px-5 py-2.5 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              Iniciar Expansión
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0B1628]/95 backdrop-blur-xl border-t border-white/8 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) =>
            link.toPath ? (
              <Link
                key={link.label}
                to={link.toPath}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-white/70 text-base hover:text-[#C9A84C] transition-colors duration-300 py-1"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href!}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-white/70 text-base hover:text-[#C9A84C] transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://wa.me/5492214592926" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-center text-xs font-semibold tracking-widest uppercase border border-[#C9A84C]/60 text-[#C9A84C] px-5 py-3 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 mt-2"
          >
            Iniciar Expansión
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
