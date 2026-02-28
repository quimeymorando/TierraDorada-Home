import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const floatingParticles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 5,
}));

export function AgenciaHero() {
    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 pb-16 pt-28"
            style={{ backgroundColor: '#0B1628' }}
        >
            {/* ── Mesh gradient orbs (background atmosphere) ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {/* Orb 1 – Violeta */}
                <div
                    className="mesh-orb-1 absolute rounded-full blur-[120px] opacity-25"
                    style={{
                        width: '60vw',
                        height: '60vw',
                        maxWidth: 700,
                        maxHeight: 700,
                        top: '-15%',
                        left: '-15%',
                        background:
                            'radial-gradient(circle, rgba(124,58,237,0.7) 0%, rgba(124,58,237,0) 70%)',
                    }}
                />
                {/* Orb 2 – Cian */}
                <div
                    className="mesh-orb-2 absolute rounded-full blur-[120px] opacity-20"
                    style={{
                        width: '55vw',
                        height: '55vw',
                        maxWidth: 650,
                        maxHeight: 650,
                        bottom: '-10%',
                        right: '-10%',
                        background:
                            'radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0) 70%)',
                    }}
                />
                {/* Orb 3 – Dorado central sutil */}
                <div
                    className="mesh-orb-3 absolute rounded-full blur-[150px] opacity-10"
                    style={{
                        width: '45vw',
                        height: '45vw',
                        maxWidth: 500,
                        maxHeight: 500,
                        top: '30%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background:
                            'radial-gradient(circle, rgba(201,168,76,0.8) 0%, rgba(201,168,76,0) 70%)',
                    }}
                />

                {/* Floating particles */}
                {floatingParticles.map((p) => (
                    <div
                        key={p.id}
                        className="float-particle absolute rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            top: p.top,
                            left: p.left,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                            background:
                                p.id % 3 === 0
                                    ? '#C9A84C'
                                    : p.id % 3 === 1
                                        ? '#22D3EE'
                                        : 'rgba(255,255,255,0.6)',
                            boxShadow: `0 0 ${p.size * 3}px currentColor`,
                        }}
                    />
                ))}
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-8 bg-[#C9A84C]/8 backdrop-blur-sm"
                >
                    <Star className="w-3 h-3 text-[#C9A84C]" fill="currentColor" />
                    <span className="font-inter text-[10px] md:text-xs text-[#C9A84C]/90 tracking-[0.3em] uppercase font-medium">
                        Tecnología · Consciencia · Expansión
                    </span>
                    <Star className="w-3 h-3 text-[#C9A84C]" fill="currentColor" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                    className="font-playfair text-white leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)' }}
                >
                    Tecnología y Consciencia
                    <br />
                    <span className="italic">para Expandir</span>
                    <br />
                    <span className="text-agencia-gold">tu Propósito.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
                    className="font-inter text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
                    style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)' }}
                >
                    Fundada por{' '}
                    <span className="text-white/90 font-medium">Joaquin Alterman</span> y{' '}
                    <span className="text-white/90 font-medium">Quimey Morando</span>.{' '}
                    Elevamos proyectos con alma hacia su máxima rentabilidad y alcance en el mundo digital.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <a
                        href="#servicios"
                        className="glow-gold group flex items-center gap-3 bg-[#0B1628] border border-[#C9A84C] text-[#C9A84C] font-inter font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#C9A84C]/10 w-full sm:w-auto justify-center"
                    >
                        Inicia tu Expansión
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, transparent, #0B1628)',
                }}
            />
        </section>
    );
}
