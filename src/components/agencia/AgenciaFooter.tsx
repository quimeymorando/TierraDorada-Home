import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const legalLinks = [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Uso', href: '#' },
];

export function AgenciaFooter() {
    return (
        <footer
            id="contacto"
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: '#070F1E' }}
        >
            {/* Top border glow */}
            <div
                className="w-full h-px"
                style={{
                    background:
                        'linear-gradient(to right, transparent, rgba(201,168,76,0.4), rgba(34,211,238,0.3), transparent)',
                }}
            />

            {/* CTA Band */}
            <div
                className="relative px-4 py-16 md:py-24 text-center overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, #0B1628 0%, #0F1E36 50%, #0B1628 100%)',
                }}
            >
                {/* Background orb */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 65%)',
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 border border-[#C9A84C]/25 rounded-full px-4 py-1.5 mb-6 bg-[#C9A84C]/6">
                        <Sparkles className="w-3 h-3 text-[#C9A84C]" />
                        <span className="font-inter text-[10px] text-[#C9A84C]/80 tracking-[0.3em] uppercase">
                            El siguiente paso es tuyo
                        </span>
                    </div>

                    <h2
                        className="font-playfair text-white mb-4 leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        ¿Preparado para{' '}
                        <span className="italic text-agencia-gold">expandir</span>
                        {' '}tu propósito?
                    </h2>
                    <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed mb-8">
                        Escribinos y agendamos una sesión estratégica sin compromiso para
                        entender tu visión y diseñar el camino juntos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5492214592926"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-gold group flex items-center justify-center gap-2 bg-[#0B1628] border border-[#C9A84C] text-[#C9A84C] font-inter font-semibold text-sm tracking-wide uppercase px-7 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Escribinos por WhatsApp
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom strip */}
            <div
                className="px-4 py-6 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo & tagline */}
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#9A7A2A] flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-[#0B1628]" />
                        </div>
                        <span className="font-playfair text-white/40 text-sm">
                            Agencia Tierra Dorada
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="font-inter text-white/25 text-xs text-center order-last sm:order-none">
                        Diseñado para expandir conciencias. © 2026 Agencia Tierra Dorada.
                    </p>

                    {/* Legal */}
                    <div className="flex items-center gap-5">
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-inter text-white/30 text-xs hover:text-white/60 transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
