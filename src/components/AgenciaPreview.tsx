import { motion } from 'framer-motion';
import { ArrowRight, Globe, Bot, TrendingUp, Fingerprint, Clapperboard, Users } from 'lucide-react';

/* ─── Servicio pills ─── */
const servicePills = [
    { icon: Globe, label: 'Webs Premium' },
    { icon: Bot, label: 'Automatización' },
    { icon: TrendingUp, label: 'Meta Ads' },
    { icon: Users, label: 'Setters & Closers' },
    { icon: Fingerprint, label: 'Branding & CM' },
    { icon: Clapperboard, label: 'Audiovisual' },
];

/* ─── Componente principal ─── */
export function AgenciaPreview() {
    return (
        <section
            className="w-full py-16 md:py-24 relative overflow-hidden border-t border-[#A67C00]/20"
            style={{ backgroundColor: '#001A33' }}
        >
            {/* Orbs de fondo (igual que el hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C] blur-[140px] opacity-[0.08]" />
                <div className="absolute bottom-[-20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#A67C00] blur-[120px] opacity-[0.06]" />
                <div className="absolute top-[30%] right-[25%] w-[300px] h-[300px] rounded-full bg-violet-600 blur-[100px] opacity-[0.07]" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* ── LEFT: Texto ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        {/* Badge */}
                        <span className="text-[#A67C00] font-cinzel text-xs tracking-[0.4em] mb-6 block font-bold uppercase">
                            Alianza Estratégica
                        </span>

                        {/* Título */}
                        <h2 className="font-cinzel text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                            Agencia<br />
                            <span className="text-[#C9A84C] italic whitespace-nowrap">Tierra Dorada</span>
                        </h2>

                        {/* Descripción */}
                        <p className="font-montserrat text-white/60 leading-relaxed mb-4 max-w-lg font-medium"
                            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
                            Ecosistemas digitales que fusionan tecnología de vanguardia con consciencia. Una alianza entre{' '}
                            <strong className="text-white/90">Joaquin Alterman</strong> y{' '}
                            <strong className="text-white/90">Quimey Morando</strong>{' '}
                            para expandir negocios con propósito y resultados reales.
                        </p>

                        <p className="font-montserrat text-white/35 text-sm leading-relaxed mb-10 max-w-lg">
                            Webs premium, automatizaciones inteligentes, campañas publicitarias,
                            equipos de venta y producción de contenido. Todo integrado. Todo alineado con tu visión.
                        </p>

                        {/* Pills de servicios */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {servicePills.map(({ icon: Icon, label }) => (
                                <div key={label}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-montserrat font-semibold tracking-wide"
                                    style={{
                                        background: 'rgba(201,168,76,0.07)',
                                        border: '1px solid rgba(201,168,76,0.22)',
                                        color: 'rgba(201,168,76,0.85)',
                                    }}>
                                    <Icon size={12} />
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="/agencia"
                            className="group inline-flex items-center gap-4 text-white font-cinzel font-bold tracking-[0.2em] text-sm hover:text-[#A67C00] transition-colors uppercase"
                        >
                            <span className="border-b border-white/30 pb-1 group-hover:border-[#A67C00] transition-colors">
                                Conocer la Agencia
                            </span>
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>

                    {/* ── RIGHT: Canvas animado ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="flex-1 w-full flex justify-center lg:justify-end"
                    >
                        <a href="/agencia" className="block group cursor-pointer relative flex items-center justify-center min-h-[400px] w-full max-w-lg lg:max-w-xl">
                            {/* Glow base */}
                            <div className="absolute bg-[#C9A84C]/10 blur-[100px] w-[20rem] h-[20rem] rounded-full"></div>

                            {/* Contenedor */}
                            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                {/* Anillo Exterior (Orbitando Fijo) */}
                                <div className="absolute inset-0 border border-[#C9A84C]/15 rounded-full border-dashed group-hover:border-[#C9A84C]/30 transition-colors duration-500">
                                </div>

                                {/* Anillos Medios (Fijos) */}
                                <div className="absolute inset-[4%] md:inset-[6%] border border-[#C9A84C]/20 rounded-full opacity-30">
                                </div>
                                <div className="absolute inset-[4%] md:inset-[6%] border border-[#C9A84C]/30 rounded-full group-hover:border-[#C9A84C]/50 transition-colors duration-500">
                                </div>

                                {/* Anillo Interior (Orbitando) */}
                                <div className="absolute inset-[12%] md:inset-[15%] border border-[#C9A84C]/40 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
                                    {/* Orbiting Dot */}
                                    <div className="w-4 h-4 md:w-5 md:h-5 bg-[#C9A84C] rounded-full absolute top-0 -mt-2 md:-mt-2.5 shadow-[0_0_25px_#C9A84C]">
                                    </div>
                                </div>

                                {/* Anillo extra de profundidad */}
                                <div className="absolute inset-[22%] md:inset-[25%] border border-[#C9A84C]/15 rounded-full group-hover:border-[#C9A84C]/25 transition-colors duration-500">
                                </div>

                                {/* Núcleo central */}
                                <div className="absolute flex items-center justify-center z-10 w-[38%] h-[38%] rounded-full bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(201,168,76,0.15)] group-hover:bg-white/10 transition-colors duration-500 group-hover:shadow-[0_0_60px_rgba(201,168,76,0.3)] border border-[#C9A84C]/20">

                                    {/* Icono Tecno-Espiritual Fijo */}
                                    <div className="relative flex items-center justify-center w-full h-full">
                                        <svg className="w-[60%] h-[60%] md:w-28 md:h-28 text-[#C9A84C] drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            {/* Estrella base */}
                                            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                                                fill="currentColor" fillOpacity="0.05" />
                                            {/* Círculo interior sutil */}
                                            <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.1"
                                                strokeDasharray="1 1" />
                                            {/* Detalles tipo engranaje/conexion */}
                                            <path d="m4.93 4.93 14.14 14.14" strokeDasharray="2 2" opacity="0.5" />
                                            <path d="m19.07 4.93-14.14 14.14" strokeDasharray="2 2" opacity="0.5" />
                                        </svg>
                                        {/* Luz interna en el icono */}
                                        <div className="absolute w-12 h-12 bg-[#C9A84C]/20 rounded-full blur-2xl group-hover:bg-[#C9A84C]/40 transition-colors duration-500">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
