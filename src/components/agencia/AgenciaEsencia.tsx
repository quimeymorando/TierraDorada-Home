import { motion, type Variants } from 'framer-motion';
import { Heart, Zap, Globe } from 'lucide-react';

const pillars = [
    {
        icon: Heart,
        title: 'Propósito',
        desc: 'Cada proyecto nace de un llamado auténtico y profundo.',
        color: '#C9A84C',
    },
    {
        icon: Zap,
        title: 'Tecnología',
        desc: 'Precisión de vanguardia al servicio de tu visión.',
        color: '#22D3EE',
    },
    {
        icon: Globe,
        title: 'Alcance',
        desc: 'Expansión consciente hacia quienes necesitan tu mensaje.',
        color: '#7C3AED',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export function AgenciaEsencia() {
    return (
        <section
            id="esencia"
            className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
            style={{ backgroundColor: '#FAF7F2' }}
        >
            {/* Subtle texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, #9A7A2A 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        background:
                            'radial-gradient(circle at top right, #C9A84C, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                    <span
                        className="font-inter text-xs tracking-[0.35em] uppercase font-semibold"
                        style={{ color: '#9A7A2A' }}
                    >
                        Nuestra Esencia
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-playfair leading-[1.15] mb-8"
                    style={{
                        fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                        color: '#1A1410',
                    }}
                >
                    Donde el propósito{' '}
                    <span
                        className="italic"
                        style={{
                            color: '#9A7A2A',
                        }}
                    >
                        se convierte
                    </span>
                    <br className="hidden sm:block" />
                    {' '}en impacto real.
                </motion.h2>

                {/* Main Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mb-16 max-w-3xl"
                >
                    <p
                        className="font-inter text-base md:text-lg leading-relaxed"
                        style={{ color: '#4A4030' }}
                    >
                        En{' '}
                        <strong style={{ color: '#9A7A2A', fontWeight: 600 }}>
                            Agencia Tierra Dorada
                        </strong>
                        , creemos que cada proyecto nace de un llamado profundo y cada negocio
                        tiene un alma vibrante esperando ser compartida con el mundo. No solo
                        construimos ecosistemas digitales; creamos puentes de luz entre tu
                        propósito más elevado y las personas que necesitan tu mensaje.
                    </p>
                    <p
                        className="font-inter text-base md:text-lg leading-relaxed mt-4"
                        style={{ color: '#4A4030' }}
                    >
                        Fusionamos la precisión de la tecnología de vanguardia con la consciencia
                        espiritual, diseñando estrategias que actúan como catalizadores de tu
                        visión.{' '}
                        <span style={{ color: '#7A5C10', fontWeight: 600 }}>
                            Tu expansión es nuestro propósito.
                        </span>
                    </p>
                </motion.div>

                {/* Pillars */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                variants={itemVariants}
                                className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    background: 'rgba(255,255,255,0.7)',
                                    borderColor: 'rgba(201,168,76,0.15)',
                                    boxShadow: '0 2px 20px rgba(154,122,42,0.06)',
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${pillar.color}15` }}
                                >
                                    <Icon
                                        className="w-5 h-5"
                                        style={{ color: pillar.color }}
                                    />
                                </div>
                                <h3
                                    className="font-playfair text-xl font-semibold mb-2"
                                    style={{ color: '#1A1410' }}
                                >
                                    {pillar.title}
                                </h3>
                                <p
                                    className="font-inter text-sm leading-relaxed"
                                    style={{ color: '#6A5840' }}
                                >
                                    {pillar.desc}
                                </p>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
                                    style={{ background: `linear-gradient(to right, ${pillar.color}, transparent)` }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
