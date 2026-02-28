import { motion, type Variants } from 'framer-motion';
import {
    Monitor, BotMessageSquare, Users, TrendingUp, Fingerprint,
    Clapperboard, ArrowRight, MessageCircle, Check,
    type LucideIcon,
} from 'lucide-react';

/* ─── Particles (stable seeds) ─── */
const heroParticles = [
    { id: 0, size: 2.5, top: '8%', left: '12%', delay: 0, dur: 7, color: '#C9A84C' },
    { id: 1, size: 1.8, top: '22%', left: '80%', delay: 1.4, dur: 9, color: '#22D3EE' },
    { id: 2, size: 3.2, top: '60%', left: '6%', delay: 2.8, dur: 6, color: '#fff6' },
    { id: 3, size: 1.6, top: '78%', left: '88%', delay: 0.6, dur: 8, color: '#C9A84C' },
    { id: 4, size: 2.0, top: '42%', left: '50%', delay: 3.2, dur: 10, color: '#22D3EE' },
    { id: 5, size: 1.4, top: '88%', left: '35%', delay: 1.9, dur: 7, color: '#fff5' },
    { id: 6, size: 2.2, top: '15%', left: '45%', delay: 4.1, dur: 8, color: '#C9A84C' },
    { id: 7, size: 1.5, top: '55%', left: '72%', delay: 0.3, dur: 9, color: '#22D3EE' },
    { id: 8, size: 2.8, top: '33%', left: '25%', delay: 2.1, dur: 6, color: '#fff4' },
];

/* ─── Animation helpers ─── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } },
};
const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
};

/* ─── Section label ─── */
function SectionLabel({ text, dark = true }: { text: string; dark?: boolean }) {
    const gold = dark ? '#C9A84C' : '#9A7A2A';
    return (
        <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${gold}, transparent)` }} />
            <span className="font-inter text-[11px] tracking-[0.35em] uppercase font-semibold" style={{ color: gold }}>
                {text}
            </span>
        </div>
    );
}

/* ─── Bullet item ─── */
function ServiceItem({ name, desc, dark = true, accent = '#22D3EE' }: { name: string; desc: string; dark?: boolean; accent?: string }) {
    return (
        <div className="flex gap-4 p-5 md:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{ background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(201,168,76,0.04)', border: `1px solid ${accent}18` }}>
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                <Check size={11} style={{ color: accent }} strokeWidth={3} />
            </div>
            <div>
                <p className="font-inter font-semibold text-base mb-1.5" style={{ color: dark ? '#ffffff' : '#1A1410' }}>
                    {name}
                </p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: dark ? 'rgba(255,255,255,0.52)' : '#5A4830' }}>
                    {desc}
                </p>
            </div>
        </div>
    );
}

/* ─── "Para quién es" pill ─── */
function ForWhomPill({ text, dark = true }: { text: string; dark?: boolean }) {
    return (
        <p className="font-inter text-xs italic leading-relaxed mt-4 px-4 py-3 rounded-xl"
            style={{ color: dark ? 'rgba(255,255,255,0.35)' : '#8A6840', background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(201,168,76,0.06)', border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(201,168,76,0.12)' }}>
            {text}
        </p>
    );
}

/* ════════════════════════════════════════════════
   HÉRO — pantalla completa con orbs + partículas
════════════════════════════════════════════════ */
export function ServiciosHero() {
    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 pb-16 pt-28"
            style={{ backgroundColor: '#0B1628' }}
        >
            {/* ── Background atmosphere (igual que página madre) ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {/* Orb violeta top-left */}
                <div className="mesh-orb-1 absolute rounded-full blur-[120px] opacity-25"
                    style={{
                        width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700, top: '-15%', left: '-15%',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.7) 0%, rgba(124,58,237,0) 70%)'
                    }} />
                {/* Orb cian bottom-right */}
                <div className="mesh-orb-2 absolute rounded-full blur-[120px] opacity-20"
                    style={{
                        width: '55vw', height: '55vw', maxWidth: 650, maxHeight: 650, bottom: '-10%', right: '-10%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0) 70%)'
                    }} />
                {/* Orb dorado central */}
                <div className="mesh-orb-3 absolute rounded-full blur-[150px] opacity-10"
                    style={{
                        width: '45vw', height: '45vw', maxWidth: 500, maxHeight: 500, top: '30%', left: '50%', transform: 'translateX(-50%)',
                        background: 'radial-gradient(circle, rgba(201,168,76,0.8) 0%, rgba(201,168,76,0) 70%)'
                    }} />
                {/* Partículas flotantes */}
                {heroParticles.map((p) => (
                    <div key={p.id} className="float-particle absolute rounded-full"
                        style={{
                            width: p.size, height: p.size, top: p.top, left: p.left,
                            animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
                            background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}`
                        }} />
                ))}
            </div>

            {/* ── Content ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible"
                className="relative z-10 max-w-4xl mx-auto">

                {/* Badge */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                    <span className="font-inter text-[11px] md:text-xs text-[#C9A84C]/80 tracking-[0.35em] uppercase font-semibold">
                        Nuestros Servicios
                    </span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                </motion.div>

                {/* Título grande */}
                <motion.h1 variants={fadeUp} className="font-playfair text-white leading-[1.05] mb-6"
                    style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
                    Ecosistemas de{' '}
                    <span className="italic text-agencia-gold">Crecimiento</span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p variants={fadeUp} className="font-playfair italic text-white/60 mb-8 leading-snug"
                    style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)' }}>
                    Herramientas de vanguardia diseñadas para materializar tu visión,<br className="hidden md:block" />
                    automatizar tu éxito y expandir tu propósito.
                </motion.p>

                {/* Divisor */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-10">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
                </motion.div>

                {/* Párrafo introductorio */}
                <motion.p variants={fadeUp} className="font-inter text-white/50 leading-relaxed max-w-3xl mx-auto"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
                    Cada uno de nuestros servicios está diseñado para integrarse como una pieza de un ecosistema mayor.
                    No vendemos herramientas sueltas: construimos la arquitectura completa que conecta tu visión con resultados concretos.
                </motion.p>
            </motion.div>

            {/* Fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #0B1628)' }} />
        </section>
    );
}

/* ════════════════════════════════════════════════
   Componente de sección grande reutilizable
════════════════════════════════════════════════ */
interface ServiceSectionProps {
    icon: LucideIcon;
    accentColor: string;
    number: string;
    label: string;
    title: string;
    titleHighlight?: string;
    intro: string;           // párrafo "qué es"
    why: string;             // párrafo "por qué lo necesitas"
    tag?: string;
    items: { name: string; desc: string }[];
    forWhom?: string;
    dark?: boolean;
    reversed?: boolean;
}

function ServiceSection({
    icon: Icon, accentColor, number, label, title, titleHighlight,
    intro, why, tag, items, forWhom, dark = true, reversed = false,
}: ServiceSectionProps) {
    const bg = dark ? '#0B1628' : '#FAF7F2';

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: bg }}>
            {/* orb / texture */}
            {dark ? (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute rounded-full blur-[150px] opacity-12"
                        style={{
                            width: '55vw', height: '55vw', top: '5%',
                            [reversed ? 'left' : 'right']: '-12%',
                            background: `radial-gradient(circle, ${accentColor}55 0%, transparent 70%)`
                        }} />
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #9A7A2A 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                    <div className="absolute top-0 bottom-0 pointer-events-none" style={{
                        [reversed ? 'right' : 'left']: 0, width: '3px',
                        background: `linear-gradient(to bottom, transparent, ${accentColor}40, transparent)`
                    }} />
                </>
            )}

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                    className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}>

                    {/* ── LEFT: Header ── */}
                    <motion.div variants={fadeUp} className="lg:w-5/12 flex-shrink-0 lg:sticky lg:top-28">
                        {/* Número + Ícono en la misma fila */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-inter font-black leading-none select-none"
                                style={{ fontSize: '2.5rem', color: `${accentColor}30`, letterSpacing: '-0.04em' }}>
                                {number}
                            </span>
                            <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}50, transparent)` }} />
                            <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center flex-shrink-0"
                                style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}35`, boxShadow: `0 0 20px ${accentColor}12` }}>
                                <Icon size={22} strokeWidth={1.4} style={{ color: accentColor }} />
                            </div>
                        </div>

                        <SectionLabel text={label} dark={dark} />

                        <h2 className="font-playfair leading-tight mb-5"
                            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', color: dark ? '#ffffff' : '#1A1410' }}>
                            {title}
                            {titleHighlight && <><br /><span className="italic" style={{ color: accentColor }}>{titleHighlight}</span></>}
                        </h2>

                        {/* Intro paragraph */}
                        <p className="font-inter leading-relaxed mb-4"
                            style={{ fontSize: 'clamp(0.9rem, 1.7vw, 1.05rem)', color: dark ? 'rgba(255,255,255,0.55)' : '#4A4030' }}>
                            {intro}
                        </p>

                        {/* Why paragraph */}
                        <p className="font-inter text-sm leading-relaxed mb-6 pl-4"
                            style={{ color: dark ? 'rgba(255,255,255,0.38)' : '#7A6040', borderLeft: `2px solid ${accentColor}40` }}>
                            {why}
                        </p>

                        {tag && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-inter font-semibold tracking-wide"
                                style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}30`, color: accentColor }}>
                                {tag}
                            </div>
                        )}

                        <div className="w-20 h-px mt-6" style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }} />
                    </motion.div>

                    {/* ── RIGHT: Items ── */}
                    <motion.div variants={stagger} className="flex-1 w-full flex flex-col gap-4">
                        {items.map((item) => (
                            <motion.div key={item.name} variants={fadeUp}>
                                <ServiceItem name={item.name} desc={item.desc} dark={dark} accent={accentColor} />
                            </motion.div>
                        ))}
                        {forWhom && (
                            <motion.div variants={fadeUp}>
                                <ForWhomPill text={forWhom} dark={dark} />
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            {/* Separador */}
            <div className="absolute bottom-0 left-0 right-0 h-px opacity-15"
                style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
        </section>
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 1 — WEBS (light)
════════════════════════════════════════════════ */
export function SeccionWebs() {
    return (
        <ServiceSection
            icon={Monitor} accentColor="#22D3EE" number="01" label="Arquitectura Digital"
            title="Presencia Digital" titleHighlight="Premium (Webs)"
            intro="Tu sitio web no es solo una tarjeta de presentación: es el primer momento de verdad que tu negocio tiene con cada cliente potencial. En segundos decide si confía en ti o no."
            why="La mayoría de los negocios pierde ventas por tener una presencia digital que no refleja el valor real de su oferta. Un diseño lento, genérico o desconectado de tu identidad habla más fuerte que cualquier promesa."
            dark={false}
            items={[
                {
                    name: 'Landing Page — Alta Conversión',
                    desc: 'Una página de maestría enfocada 100% en convertir. Ideal para lanzamientos de productos, servicios específicos o captación de leads. Diseño impactante, copywriting estratégico y un único CTA irresistible que guía cada visita hacia la acción deseada.',
                },
                {
                    name: 'Web Intermedia — Multicapa',
                    desc: 'Estructura dinámica con múltiples secciones para proyectos en crecimiento que necesitan contar su historia completa: About, Servicios, Blog, Testimonios y Contacto. Perfecta para posicionarte como referente en tu industria.',
                },
                {
                    name: 'Ecosistema Web Pro — Inmersivo',
                    desc: 'El estándar definitivo para negocios que dominan su mercado. Animaciones premium, integraciones con CRMs, pasarelas de pago, área de miembros, automatizaciones y un diseño de nivel internacional que eleva tu autoridad en cada scroll.',
                },
            ]}
            forWhom="Ideal para: emprendedores, coaches, consultores, marcas de servicio y creadores que quieren que su presencia digital genere confianza instantánea y conversiones reales."
        />
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 2 — MANYCHAT (dark, reversed)
════════════════════════════════════════════════ */
export function SeccionManychat() {
    return (
        <ServiceSection
            icon={BotMessageSquare} accentColor="#7C3AED" number="02" label="Inteligencia y Flujo"
            title="Automatización y Flujo" titleHighlight="ManyChat & Bots"
            intro="Tus prospectos no esperan. Cuando alguien te escribe y no obtiene respuesta en minutos, va al siguiente. Los sistemas de automatización te permiten estar presente sin estar disponible las 24 horas."
            why="No se trata de reemplazar la conexión humana, sino de amplificarla. Un bot bien configurado puede nutrír, calificar y preparar a tus prospectos para que cuando lleguen a ti ya estén listos para comprar."
            dark={true} reversed={true}
            items={[
                {
                    name: 'Automatización Básica — Respuestas Inteligentes',
                    desc: 'Flujos de respuesta automática en Instagram y Facebook Messenger para comentarios, DMs y palabras clave. Captación de datos, respuestas a FAQs, bienvenida a nuevos seguidores y activación de secuencias de seguimiento. Tu primera impresión, siempre perfecta.',
                },
                {
                    name: 'Bot Avanzado — Embudo Conversacional Completo',
                    desc: 'Embudos de ManyChat diseñados como un vendedor virtual de alto nivel: califica al prospecto con preguntas estratégicas, lo educa sobre tu oferta, rompe objeciones con contenido de valor, agenda citas automáticamente y lo entrega listo para el cierre. Compatible con WhatsApp, Instagram, Facebook y Email.',
                },
            ]}
            forWhom="Ideal para: negocios con alto volumen de consultas, creadores de contenido con comunidades activas y cualquier negocio que quiera escalar sin contratar más personal."
        />
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 3 — META ADS (light)
════════════════════════════════════════════════ */
export function SeccionAds() {
    return (
        <ServiceSection
            icon={TrendingUp} accentColor="#C9A84C" number="03" label="Expansión y Tráfico"
            title="Tráfico y Expansión" titleHighlight="Meta Ads"
            intro="El mejor servicio del mundo no vende si nadie lo conoce. Las campañas de Meta Ads bien ejecutadas llevan tu mensaje exacto a las personas que ya están buscando lo que tú ofreces, en el momento justo."
            why="La publicidad en Meta no es solo boost de publicaciones. Es segmentación quirúrgica, psicología del consumidor y datos en tiempo real trabajando juntos para maximizar cada peso de inversión que destinas a crecer."
            dark={false}
            items={[
                {
                    name: 'Campaña Básica — Validación y Atracción',
                    desc: 'Lanzamiento y gestión de campañas orientadas a awareness y generación de leads cualificados. Creación de audiencias, diseño de creativos que detienen el scroll, copywriting persuasivo y optimización continua basada en datos reales. Ideal para validar tu oferta y construir tu base de clientes.',
                },
                {
                    name: 'Campaña Pro — Escalado Masivo y ROI Máximo',
                    desc: 'Estrategia integral de Meta Ads para negocios listos para crecer agresivamente: escalado de presupuesto con control de CPL, retargeting por comportamiento e intención, audiencias Lookalike de alta conversión, A/B testing continuo y reporte semanal de performance para decisiones data-driven.',
                },
            ]}
            forWhom="Ideal para: negocios con oferta validada que quieren escalar sus ventas de forma predecible y rentable con inversión publicitaria medible."
        />
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 4 — SETTERS & CLOSERS (dark, reversed)
════════════════════════════════════════════════ */
export function SeccionSetters() {
    return (
        <ServiceSection
            icon={Users} accentColor="#22D3EE" number="04" label="Adquisición y Cierre"
            title="Conexión y Ventas" titleHighlight="de Alto Valor"
            intro="El tráfico y los leads no son ventas. La diferencia entre un lead y un cliente es la conversación correcta, en el momento correcto, con la persona correcta. Ahí es donde entramos nosotros."
            why="Los negocios de alto ticket que dependen de una sola persona para cerrar todas sus ventas tienen un techo de ingresos. Delegar la adquisición y el cierre a profesionales entrenados en tu propuesta es lo que permite escalar sin sacrificar calidad ni tu tiempo."
            dark={true} reversed={true}
            tag="Exclusivo para ecosistemas +$10k / mes"
            items={[
                {
                    name: 'Setter (Persona o Bot) — Cualificación Estratégica',
                    desc: 'Tu primer filtro de calidad. El Setter contacta a los leads, abre la conversación, descubre su situación y necesidades, rompe el hielo con empatía y agenda la cita de cierre únicamente con prospectos que cumplen tu perfil de cliente ideal. Resultado: tu agenda llena de personas que ya quieren comprar, sin perder horas calificando a quien no es para ti.',
                },
                {
                    name: 'Closer de Alto Valor — Cierre High-Ticket',
                    desc: 'Un consultor de cierre entrenado en tu oferta, tu lenguaje y tu metodología. Conduce las conversaciones de venta con estructura (presentación, diagnóstico, propuesta y cierre), maneja objeciones con elegancia y convierte llamadas en contratos. Reportes semanales de performance, grabaciones y mejora continua incluidos.',
                },
            ]}
            forWhom="Exclusivo para: negocios con servicios de alto valor ($1.000+) que están activamente generando leads y buscan sistematizar y escalar su proceso de ventas con profesionales certificados."
        />
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 5 — BRANDING & COMMUNITY (light)
════════════════════════════════════════════════ */
export function SeccionIdentidad() {
    return (
        <ServiceSection
            icon={Fingerprint} accentColor="#9A7A2A" number="05" label="Identidad y Comunidad"
            title="Branding &" titleHighlight="Community"
            intro="Una marca poderosa no se ve, se siente. Es la coherencia entre lo que dices, cómo te ves y cómo te perciben. Sin identidad visual clara y comunidad comprometida, ningún otro sistema funciona al máximo."
            why="Puedes tener el mejor servicio pero si tu imagen no transmite profesionalismo, o si tu comunidad no está activa y conectada contigo, dejas dinero sobre la mesa cada día. La identidad y la comunidad son el suelo fértil donde crecen todas las demás estrategias."
            dark={false}
            items={[
                {
                    name: 'Branding Completo — Identidad Visual Integral',
                    desc: 'Diseño del alma gráfica de tu proyecto: naming estratégico, logotipo y variantes, paleta de color con psicología aplicada, tipografías, iconografía, manual de marca completo y kit de activos gráficos para redes sociales, presentaciones y materiales de venta. Todo coherente, todo tuyo, todo premium.',
                },
                {
                    name: 'Community Manager — Gestión Estratégica',
                    desc: 'Presencia activa y estratégica en tus redes sociales: planificación de contenido mensual, diseño de piezas gráficas, copywriting con tu voz de marca, gestión de comentarios e interacciones y reporte mensual de crecimiento orgánico. Tu comunidad, creciendo con propósito.',
                },
            ]}
            forWhom="Ideal para: emprendedores que lanzan su marca o la están refrescando, y negocios con presencia en redes que necesitan consistencia y estrategia para monetizar su audiencia."
        />
    );
}

/* ════════════════════════════════════════════════
   SECCIÓN 6 — AUDIOVISUAL (dark, reversed)
════════════════════════════════════════════════ */
export function SeccionAudiovisual() {
    return (
        <ServiceSection
            icon={Clapperboard} accentColor="#7C3AED" number="06" label="Contenido Magnético"
            title="Creación" titleHighlight="Audiovisual"
            intro="En el mundo actual, el video no es opcional: es el idioma más poderoso para conectar, posicionarte y vender. El contenido que detienes el scroll, el que hace que alguien diga 'esto es exactamente lo que necesito', tiene estructuras y técnicas específicas."
            why="Publicar sin estrategia es ruido. El contenido audiovisual efectivo es planificado, guionado para generar emoción y decisión, y editado para maximizar la retención. La diferencia entre un video viral y uno ignorado no es el equipo ni el presupuesto: es la narrativa."
            dark={true} reversed={true}
            items={[
                {
                    name: 'Estrategia de Contenido — Planificación Editorial',
                    desc: 'Definición de tus pilares de contenido basados en tu audiencia y objetivos: awareness, autoridad, conexión y conversión. Calendario editorial mensual, ideas de hooks y ganchos para Reels, análisis de tu competencia y benchmarks del mercado para diferenciarte con claridad.',
                },
                {
                    name: 'Guionado Profesional — Narrativas que Venden',
                    desc: 'Guiones estructurados con técnicas de copywriting aplicadas al video: hook irresistible en los primeros 3 segundos, desarrollo que mantiene la atención y CTA que genera acción. Adaptados a tu personalidad, tu industria y el formato de cada plataforma (Reels, YouTube Shorts, TikTok, Stories).',
                },
                {
                    name: 'Pack Producción y Edición — Calidad Premium',
                    desc: 'Edición profesional con motion graphics, subtítulos animados, música licenciada, efectos de sonido, corrección de color y transiciones de alto impacto. Entrega de piezas optimizadas para cada formato y plataforma: vertical para Reels y TikTok, horizontal para YouTube, cuadrado para LinkedIn.',
                },
            ]}
            forWhom="Ideal para: coaches, consultores, creadores de contenido y marcas personales que quieren usar el video de forma estratégica para atraer clientes y posicionarse como referentes en su industria."
        />
    );
}

/* ════════════════════════════════════════════════
   CTA FINAL
════════════════════════════════════════════════ */
export function ServiciosCTA() {
    return (
        <section className="relative w-full py-28 md:py-36 px-4 overflow-hidden" style={{ backgroundColor: '#0B1628' }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />
                <div className="mesh-orb-1 absolute rounded-full blur-[130px] opacity-18"
                    style={{
                        width: '50vw', height: '50vw', top: '-20%', right: '-10%',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)'
                    }} />
                <div className="absolute rounded-full blur-[100px] opacity-10"
                    style={{
                        width: '35vw', height: '35vw', bottom: '-15%', left: '-5%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)'
                    }} />
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="relative z-10 max-w-3xl mx-auto text-center">

                <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-7">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
                    <span className="font-inter text-xs tracking-[0.35em] uppercase text-[#C9A84C]/80 font-semibold">Dar el Primer Paso</span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
                </motion.div>

                <motion.h2 variants={fadeUp} className="font-playfair text-white leading-tight mb-6"
                    style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)' }}>
                    ¿Listo para elevar{' '}
                    <span className="italic text-agencia-gold">tu estándar</span>?
                </motion.h2>

                <motion.p variants={fadeUp} className="font-inter text-white/50 leading-relaxed mb-12"
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
                    Hablemos de tu visión y diseñemos juntos el ecosistema exacto que tu negocio necesita para escalar con propósito y rentabilidad sostenida.
                </motion.p>

                <motion.div variants={fadeUp}>
                    <a
                        href="https://wa.me/5492214592926"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-gold group inline-flex items-center gap-3 bg-[#0B1628] border border-[#C9A84C] text-[#C9A84C] font-inter font-semibold text-sm tracking-wider uppercase px-10 py-5 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 justify-center"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Agendar Sesión de Expansión
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
