import { motion, type Variants } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

/* ─── Animation helpers ─── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
};

/* ─── Floating particle seeds (stable across renders) ─── */
const particles = [
    { id: 0, size: 2.4, top: '12%', left: '8%', delay: 0, dur: 7, color: '#C9A84C' },
    { id: 1, size: 1.6, top: '35%', left: '92%', delay: 1.2, dur: 9, color: '#22D3EE' },
    { id: 2, size: 3, top: '65%', left: '5%', delay: 2.5, dur: 6, color: '#ffffff80' },
    { id: 3, size: 1.8, top: '80%', left: '75%', delay: 0.7, dur: 8, color: '#C9A84C' },
    { id: 4, size: 2.2, top: '20%', left: '55%', delay: 3, dur: 10, color: '#22D3EE' },
    { id: 5, size: 1.4, top: '50%', left: '30%', delay: 1.8, dur: 7, color: '#ffffff60' },
];

export function EsenciaHero() {
    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 pb-16 pt-28"
            style={{ backgroundColor: '#0B1628' }}
        >
            {/* ── Background atmosphere ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {/* Orb violeta top-left */}
                <div
                    className="mesh-orb-1 absolute rounded-full blur-[130px] opacity-20"
                    style={{
                        width: '55vw', height: '55vw', maxWidth: 680, maxHeight: 680,
                        top: '-20%', left: '-18%',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.65) 0%, transparent 70%)',
                    }}
                />
                {/* Orb cian bottom-right */}
                <div
                    className="mesh-orb-2 absolute rounded-full blur-[120px] opacity-18"
                    style={{
                        width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600,
                        bottom: '-12%', right: '-12%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)',
                    }}
                />
                {/* Orb dorado central */}
                <div
                    className="mesh-orb-3 absolute rounded-full blur-[160px] opacity-8"
                    style={{
                        width: '40vw', height: '40vw', maxWidth: 480, maxHeight: 480,
                        top: '40%', left: '50%', transform: 'translateX(-50%)',
                        background: 'radial-gradient(circle, rgba(201,168,76,0.7) 0%, transparent 70%)',
                    }}
                />
                {/* Particles */}
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="float-particle absolute rounded-full"
                        style={{
                            width: p.size, height: p.size,
                            top: p.top, left: p.left,
                            animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
                            background: p.color,
                            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                        }}
                    />
                ))}
            </div>

            {/* ── Content ── */}
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Badge */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                    <span className="font-inter text-[10px] md:text-xs text-[#C9A84C]/80 tracking-[0.35em] uppercase font-semibold">
                        Nuestra Historia
                    </span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={fadeUp}
                    className="font-playfair text-white leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}
                >
                    El Latido de{' '}
                    <span className="text-agencia-gold italic">Tierra Dorada</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp}
                    className="font-playfair italic text-white/60 mb-8 leading-snug"
                    style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)' }}
                >
                    Donde la tecnología de vanguardia y la esencia de tu empresa se encuentran.
                </motion.p>

                {/* Divider */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-10">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
                </motion.div>

                {/* Intro paragraph */}
                <motion.p
                    variants={fadeUp}
                    className="font-inter text-white/55 leading-relaxed max-w-3xl mx-auto"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
                >
                    Sabemos lo que se siente liderar un proyecto con visión. Tienes un producto, un servicio
                    o un mensaje excepcional y un profundo deseo de impactar en tu mercado. Sin embargo, a
                    veces el mundo digital puede sentirse frío, abrumador o desconectado; como si los
                    algoritmos y las pantallas no lograran captar el verdadero valor de lo que ofreces.
                    Muchas empresas y creadores se agotan intentando encajar su identidad en plantillas
                    rígidas, perdiendo su esencia en el intento.{' '}
                    <span className="text-white/80 font-medium">
                        La tecnología no es una barrera fría; es el puente más fuerte hacia tus clientes.
                    </span>{' '}
                    Y cuando se utiliza con estrategia y consciencia, se convierte en el mayor amplificador
                    de tu éxito.
                </motion.p>
            </motion.div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #0B1628)' }}
            />
        </section>
    );
}

/* ─── Sección 2: Fusión Tecno-Esencial ─── */
export function EsenciaFusion() {
    return (
        <section
            className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
            style={{ backgroundColor: '#FAF7F2' }}
        >
            {/* Texture dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #9A7A2A 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ background: 'radial-gradient(circle at top right, #C9A84C, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="mb-10"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                        <span className="font-inter text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#9A7A2A' }}>
                            Nuestra Visión
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-playfair leading-[1.15] mb-10"
                        style={{ fontSize: 'clamp(1.9rem, 5vw, 3.5rem)', color: '#1A1410' }}
                    >
                        La Fusión{' '}
                        <span className="italic" style={{ color: '#9A7A2A' }}>
                            Tecno-Esencial
                        </span>
                    </motion.h2>

                    <motion.div variants={fadeUp} className="space-y-6">
                        <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#4A4030' }}>
                            En <strong style={{ color: '#9A7A2A', fontWeight: 600 }}>Agencia Tierra Dorada</strong>,
                            nacimos para elevar el estándar digital. Creemos firmemente que cada negocio, sin importar
                            su industria, tiene un alma vibrante: un propósito detrás de lo que hace y un valor único
                            esperando ser descubierto por el mundo.
                        </p>
                        <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#4A4030' }}>
                            <strong style={{ color: '#7A5C10', fontWeight: 600 }}>Joaquin Alterman y Quimey Morando</strong>{' '}
                            fundaron este espacio al comprender que el verdadero crecimiento empresarial nace de la
                            armonía absoluta entre dos fuerzas: la estrategia técnica y la identidad humana. No
                            construimos simples páginas web ni lanzamos campañas vacías. Nosotros{' '}
                            <em style={{ color: '#7A5C10' }}>creamos ecosistemas digitales vivos y rentables</em>.
                            Tejemos redes neuronales y arquitecturas de calidad premium que conectan el núcleo de tu
                            empresa con las personas que buscan exactamente lo que tú ofreces.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Three pillars */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-4"
                >
                    {[
                        { num: '01', label: 'Propósito', desc: 'Cada decisión estratégica nace de tu visión más elevada.' },
                        { num: '02', label: 'Tecnología', desc: 'Herramientas de vanguardia al servicio de tu identidad.' },
                        { num: '03', label: 'Impacto', desc: 'Resultados medibles que escalan sin perder tu esencia.' },
                    ].map((p) => (
                        <motion.div
                            key={p.num}
                            variants={fadeUp}
                            className="border-t-2 pt-5 group hover:-translate-y-1 transition-transform duration-300"
                            style={{ borderColor: 'rgba(201,168,76,0.25)' }}
                        >
                            <span className="font-inter text-xs font-bold tracking-[0.3em] uppercase mb-2 block" style={{ color: '#C9A84C' }}>
                                {p.num}
                            </span>
                            <h3 className="font-playfair text-xl font-semibold mb-2" style={{ color: '#1A1410' }}>
                                {p.label}
                            </h3>
                            <p className="font-inter text-sm leading-relaxed" style={{ color: '#6A5840' }}>
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─── Sección 3: Fundadores zigzag ─── */

interface FounderBlockProps {
    name: string;
    role: string;
    bio: string;
    accentColor: string;
    imageSrc: string;
    reverse?: boolean;
}

function FounderBlock({ name, role, bio, accentColor, imageSrc, reverse = false }: FounderBlockProps) {
    const slideFrom: Variants = {
        hidden: { opacity: 0, x: reverse ? 40 : -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 } },
    };
    const slideFromOpp: Variants = {
        hidden: { opacity: 0, x: reverse ? -40 : 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
    };

    return (
        <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-14 items-center`}
        >
            {/* Imagen real del fundador */}
            <motion.div variants={slideFrom} className="w-full md:w-2/5 flex-shrink-0">
                <div
                    className="relative w-full rounded-2xl overflow-hidden group"
                    style={{
                        aspectRatio: '4/5',
                        border: `1px solid ${accentColor}30`,
                        boxShadow: `0 0 40px ${accentColor}15, 0 20px 60px rgba(0,0,0,0.4)`,
                    }}
                >
                    {/* Foto */}
                    <img
                        src={imageSrc}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradiente inferior */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `linear-gradient(to top, rgba(11,22,40,0.65) 0%, rgba(11,22,40,0.1) 45%, transparent 70%)` }}
                    />
                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l z-10" style={{ borderColor: `${accentColor}70` }} />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r z-10" style={{ borderColor: `${accentColor}70` }} />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l z-10" style={{ borderColor: `${accentColor}70` }} />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r z-10" style={{ borderColor: `${accentColor}70` }} />
                    {/* Etiqueta inferior */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                        <span
                            className="font-inter text-[10px] font-semibold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full backdrop-blur-sm"
                            style={{ color: accentColor, background: 'rgba(11,22,40,0.7)', border: `1px solid ${accentColor}30` }}
                        >
                            Co-Fundador
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={slideFromOpp} className="flex-1">
                <div
                    className="glass-card rounded-2xl p-7 md:p-10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${accentColor}18` }}
                >
                    <span className="font-inter text-xs font-bold tracking-[0.35em] uppercase mb-2 block" style={{ color: accentColor }}>
                        Co-Fundador
                    </span>
                    <h3 className="font-playfair text-white text-2xl md:text-3xl font-semibold mb-1">{name}</h3>
                    <p className="font-inter text-sm font-medium mb-5" style={{ color: `${accentColor}CC` }}>{role}</p>
                    <div className="w-12 h-px mb-6" style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }} />
                    <p className="font-inter text-white/55 leading-relaxed text-base">{bio}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function EsenciaFundadores() {
    const founders = [
        {
            name: 'Joaquin Alterman',
            role: 'Co-Fundador & Estratega',
            bio: 'Con una profunda comprensión de la estructura digital y la psicología humana, Joaquin diseña las arquitecturas que permiten a las empresas escalar sin perder su centro. Su enfoque fusiona la rentabilidad con el propósito.',
            accentColor: '#C9A84C',
            imageSrc: 'https://assets.cdn.filesafe.space/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png',
            reverse: false,
        },
        {
            name: 'Quimey Morando',
            role: 'Co-Fundador & Director Tecnológico',
            bio: 'Especialista en llevar la tecnología de vanguardia al servicio de la visión empresarial. Quimey transforma ideas abstractas en ecosistemas interactivos, estéticos y de alta conversión, creando experiencias digitales inolvidables.',
            accentColor: '#22D3EE',
            imageSrc: '/quimey-profile.png',
            reverse: true,
        },
    ];


    return (
        <section
            className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
            style={{ backgroundColor: '#0B1628' }}
        >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute rounded-full blur-[110px] opacity-12"
                    style={{
                        width: '45vw', height: '45vw', top: '20%', left: '-5%',
                        background: 'radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute rounded-full blur-[110px] opacity-10"
                    style={{
                        width: '40vw', height: '40vw', bottom: '15%', right: '-5%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                        <span className="font-inter text-xs tracking-[0.35em] uppercase text-[#C9A84C] font-semibold">
                            Los Fundadores
                        </span>
                        <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="font-playfair text-white leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
                    >
                        Las mentes detrás de{' '}
                        <span className="italic text-agencia-gold">Tierra Dorada</span>
                    </motion.h2>
                </motion.div>

                {/* Zigzag blocks */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {founders.map((f) => (
                        <FounderBlock
                            key={f.name}
                            name={f.name}
                            role={f.role}
                            bio={f.bio}
                            accentColor={f.accentColor}
                            imageSrc={f.imageSrc}
                            reverse={f.reverse}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Sección 4: CTA Final ─── */
export function EsenciaCTA() {
    return (
        <section
            className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
            style={{ backgroundColor: '#FAF7F2' }}
        >
            {/* dot texture */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #9A7A2A 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Label */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                >
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                        <span className="font-inter text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: '#9A7A2A' }}>
                            Nuestra Promesa
                        </span>
                        <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-playfair leading-tight mb-6"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#1A1410' }}
                    >
                        Expansión y <span className="italic" style={{ color: '#9A7A2A' }}>Rentabilidad</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="font-inter text-base md:text-lg leading-relaxed mb-10"
                        style={{ color: '#4A4030' }}
                    >
                        Vemos tu negocio como una entidad en constante evolución. Para que logre un impacto masivo
                        y escale de forma sostenida, necesita raíces sólidas y una estructura inteligente. Queremos
                        que tú y tu equipo se dediquen a su zona de genialidad —a innovar, a crear, a dirigir y a
                        liderar— mientras nuestros sistemas trabajan en armonía y de forma ininterrumpida para
                        multiplicar tus ventas.
                    </motion.p>

                    {/* Closing statement */}
                    <motion.div
                        variants={fadeUp}
                        className="relative py-8 px-6 md:px-10 mb-12 rounded-2xl border"
                        style={{
                            borderColor: 'rgba(201,168,76,0.2)',
                            background: 'rgba(201,168,76,0.04)',
                        }}
                    >
                        <div className="absolute top-0 left-6 right-6 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C80, transparent)' }} />
                        <p
                            className="font-playfair italic leading-relaxed"
                            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#7A5C10' }}
                        >
                            "El valor de tu empresa es demasiado importante para quedarse estancado en el ruido digital.
                            Es momento de elevar tu estándar, expandir tus fronteras y anclar tu legado en la Tierra Dorada.{' '}
                            <strong style={{ color: '#9A7A2A' }}>Tu expansión es nuestro propósito.</strong>"
                        </p>
                        <div className="absolute bottom-0 left-6 right-6 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C80, transparent)' }} />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/5492214592926"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-gold group flex items-center gap-3 bg-[#0B1628] border border-[#C9A84C] text-[#C9A84C] font-inter font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Comencemos a escalar tu negocio
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
