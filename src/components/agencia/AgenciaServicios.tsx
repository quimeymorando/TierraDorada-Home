import { motion, type Variants } from 'framer-motion';
import { Monitor, BotMessageSquare, TrendingUp, Fingerprint, Clapperboard, Users, type LucideIcon } from 'lucide-react';

interface ServiceCard {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    accentColor: string;
}

const services: ServiceCard[] = [
    {
        icon: Monitor,
        title: 'Presencia Digital',
        subtitle: 'Webs & Landing Pages',
        description:
            'Landing Pages de alta conversión, Webs Intermedias y Ecosistemas Pro de calidad premium que consolidan tu autoridad en el mundo digital.',
        accentColor: '#22D3EE',
    },
    {
        icon: BotMessageSquare,
        title: 'Automatización y Flujo',
        subtitle: 'ManyChat & Bots',
        description:
            'Automatización básica y Bots avanzados que nutren a tu comunidad 24/7 sin perder la esencia humana de cada interacción.',
        accentColor: '#7C3AED',
    },
    {
        icon: TrendingUp,
        title: 'Tráfico y Expansión',
        subtitle: 'Meta Ads',
        description:
            'Campañas Basic y Pro para atraer personas afines y estrategias de escalado consciente con máximo retorno de inversión.',
        accentColor: '#C9A84C',
    },
    {
        icon: Fingerprint,
        title: 'Identidad y Comunidad',
        subtitle: 'Branding & Community',
        description:
            'Branding que materializa tu energía y Community Management con empatía. Tu identidad, coherente en cada punto de contacto.',
        accentColor: '#22D3EE',
    },
    {
        icon: Clapperboard,
        title: 'Creación Audiovisual',
        subtitle: 'Contenido Magnético',
        description:
            'Estrategia, guionado y edición. Contenido magnético que transmite tu mensaje con claridad y genera conexión genuina.',
        accentColor: '#7C3AED',
    },
    {
        icon: Users,
        title: 'Conexión y Ventas',
        subtitle: 'Setters & Closers',
        description:
            'Setters (Persona/Bot) para cualificar prospectos y Closers de alto valor (exclusivo para ecosistemas +10k mensuales).',
        accentColor: '#C9A84C',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
};

export function AgenciaServicios() {
    return (
        <section
            id="servicios"
            className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
            style={{ backgroundColor: '#0B1628' }}
        >
            {/* Background atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute rounded-full blur-[100px] opacity-15"
                    style={{
                        width: '50vw',
                        height: '50vw',
                        top: '10%',
                        right: '-10%',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute rounded-full blur-[100px] opacity-10"
                    style={{
                        width: '40vw',
                        height: '40vw',
                        bottom: '5%',
                        left: '-5%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                        <span className="font-inter text-xs tracking-[0.35em] uppercase text-[#C9A84C] font-semibold">
                            Nuestros Servicios
                        </span>
                        <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                    </div>

                    <h2
                        className="font-playfair text-white leading-tight mb-4"
                        style={{ fontSize: 'clamp(1.9rem, 5vw, 3.5rem)' }}
                    >
                        Ecosistemas de{' '}
                        <span className="italic text-agencia-gold">Crecimiento</span>
                    </h2>

                    <p className="font-inter text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        Cada servicio está diseñado para potenciar una dimensión específica
                        de tu negocio, en perfecta sinergia con los demás.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            className="glass-card group relative rounded-2xl p-6 md:p-7 flex flex-col cursor-default"
                        >
                            {/* Top accent line (glow on hover via CSS class) */}
                            <div
                                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, transparent, ${service.accentColor}, transparent)`,
                                }}
                            />

                            {/* Lucide Icon */}
                            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                                <service.icon
                                    size={28}
                                    strokeWidth={1.4}
                                    style={{ color: service.accentColor }}
                                />
                            </div>

                            {/* Title + subtitle */}
                            <h3 className="font-playfair text-white text-lg md:text-xl font-semibold mb-1">
                                {service.title}
                            </h3>
                            <span
                                className="font-inter text-xs font-semibold tracking-widest uppercase mb-3 transition-colors duration-300"
                                style={{ color: service.accentColor }}
                            >
                                {service.subtitle}
                            </span>

                            {/* Description */}
                            <p className="font-inter text-white/50 text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300">
                                {service.description}
                            </p>

                            {/* Bottom corner accent */}
                            <div
                                className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                style={{ background: service.accentColor }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Below Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <p className="font-inter text-white/40 text-sm mb-5">
                        ¿No sabés por dónde empezar? Te guiamos.
                    </p>
                    <a
                        href="#contacto"
                        className="glow-gold inline-flex items-center gap-2 bg-[#0B1628] border border-[#C9A84C] text-[#C9A84C] font-inter font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300"
                    >
                        Solicitar Consultoría Gratuita
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
