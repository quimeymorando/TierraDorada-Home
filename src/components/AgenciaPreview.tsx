import { motion } from 'framer-motion';
import { ArrowRight, Globe, Bot, TrendingUp, Fingerprint, Clapperboard, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

/* ─── Servicio pills ─── */
const servicePills = [
    { icon: Globe, label: 'Webs Premium' },
    { icon: Bot, label: 'Automatización' },
    { icon: TrendingUp, label: 'Meta Ads' },
    { icon: Users, label: 'Setters & Closers' },
    { icon: Fingerprint, label: 'Branding & CM' },
    { icon: Clapperboard, label: 'Audiovisual' },
];

/* ─── Canvas animation: partículas flotantes conectadas ─── */
function ConstellationCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const GOLD = 'rgba(201, 168, 76,';
        const CYAN = 'rgba(34, 211, 238,';
        const WHITE = 'rgba(255, 255, 255,';

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        type Particle = {
            x: number; y: number;
            vx: number; vy: number;
            r: number;
            color: string;
            alpha: number;
        };

        const N = 38;
        const particles: Particle[] = Array.from({ length: N }, () => {
            const palette = [GOLD, CYAN, WHITE];
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                r: Math.random() * 2.2 + 1,
                color: palette[Math.floor(Math.random() * palette.length)],
                alpha: Math.random() * 0.5 + 0.3,
            };
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Conexiones
            for (let i = 0; i < N; i++) {
                for (let j = i + 1; j < N; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.18;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(201,168,76,${opacity})`;
                        ctx.lineWidth = 0.7;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Nodos
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.alpha})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = `${p.color}0.6)`;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
        />
    );
}

/* ─── Componente principal ─── */
export function AgenciaPreview() {
    return (
        <section
            className="w-full py-32 md:py-44 relative overflow-hidden border-t border-[#A67C00]/20"
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
                        <h2 className="font-cinzel text-white leading-none mb-8" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
                            AGENCIA<br />
                            <span className="text-gold-gradient italic">TIERRA DORADA</span>
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
                        className="flex-1 w-full max-w-sm lg:max-w-md"
                    >
                        <a href="/agencia" className="block group cursor-pointer">
                            <div
                                className="relative overflow-hidden rounded-sm border border-[#A67C00]/25 shadow-[0_20px_60px_rgba(0,26,51,0.6)] group-hover:border-[#A67C00]/50 transition-colors duration-500"
                                style={{ aspectRatio: '4/3', background: 'rgba(0,10,20,0.7)' }}
                            >
                                {/* Constelación animada */}
                                <ConstellationCanvas />

                                {/* Overlay con contenido */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8 text-center">
                                    {/* Círculo ATD */}
                                    <div
                                        className="w-20 h-20 rounded-full border-2 border-[#C9A84C]/50 flex items-center justify-center mb-5 group-hover:border-[#C9A84C] transition-colors duration-500"
                                        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }}
                                    >
                                        <span className="font-cinzel text-2xl font-bold text-[#C9A84C]">ATD</span>
                                    </div>

                                    <p className="font-cinzel text-white/80 text-sm tracking-[0.2em] mb-1">AGENCIA</p>
                                    <p className="font-cinzel text-[#C9A84C] text-base tracking-[0.12em] italic mb-5">Tierra Dorada</p>

                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {['Tecnología', 'Consciencia', 'Expansión'].map((t) => (
                                            <span key={t}
                                                className="text-[10px] font-montserrat font-semibold tracking-widest text-white/35 uppercase px-2 py-0.5 border border-white/10 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Marco interior dorado */}
                                <div className="absolute inset-3 border border-[#A67C00]/20 pointer-events-none z-20 group-hover:border-[#A67C00]/40 transition-colors duration-500" />

                                {/* Etiqueta inferior */}
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
                                    <span className="font-cinzel text-[10px] text-white/50 tracking-[0.4em] bg-[#001A33]/80 backdrop-blur-sm px-4 py-1.5 border border-[#A67C00]/25 whitespace-nowrap">
                                        ALIANZA ESTRATÉGICA
                                    </span>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
