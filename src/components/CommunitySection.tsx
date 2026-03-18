import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function CommunitySection() {
    return (
        <section
            className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#E4DBBD] to-[#FDFBF7]"
        >
            {/* Brillo sutil de fondo para integrarse al ecosistema Tierra Dorada */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#C9A84C] blur-[120px] opacity-[0.15]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-violet-600 blur-[120px] opacity-[0.08]" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
                    
                    {/* IZQUIERDA: Elemento visual abstracto, refinado y elegante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-[45%] flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-full max-w-md aspect-[4/3] lg:aspect-square flex items-center justify-center group cursor-default">
                            {/* Marcos premium */}
                            <div className="absolute inset-[10%] border border-[#C9A84C]/15 rounded-2xl md:rounded-[2rem] transform -rotate-3 transition-transform duration-700 group-hover:rotate-0" />
                            <div className="absolute inset-[10%] border border-[#C9A84C]/20 rounded-2xl md:rounded-[2rem] bg-[#C9A84C]/[0.05] backdrop-blur-sm" />
                            
                            {/* Centro espiritual geométrico */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <div className="absolute inset-0 border border-[#A67C00]/30 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="absolute inset-3 border border-[#A67C00]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <Sparkles className="w-10 h-10 text-[#C9A84C] opacity-70" strokeWidth={1} />
                            </div>
                        </div>
                    </motion.div>

                    {/* DERECHA: Contenido y CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[55%] text-left order-1 lg:order-2"
                    >
                        {/* Eyebrow Label */}
                        <span className="text-[#A67C00] font-cinzel text-xs tracking-[0.4em] mb-6 block font-bold uppercase">
                            COMUNIDAD TIERRA DORADA
                        </span>

                        {/* Título Principal */}
                        <h2 className="font-cinzel text-[#001A33] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                            Tu puerta de entrada al universo <span className="text-[#C9A84C] italic">Tierra Dorada</span>
                        </h2>

                        {/* Párrafo Descriptivo */}
                        <p className="font-montserrat text-[#001A33]/75 leading-relaxed mb-10 max-w-lg font-medium"
                            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
                            Un espacio gratuito para comenzar a recorrer el camino junto a otros, acceder a recursos, recibir guía de maestros y acercarte a la visión viva de Tierra Dorada. Una primera puerta para explorar, inspirarte y empezar a construir tu propia Nave.
                        </p>

                        {/* Botón CTA */}
                        <a
                            href="/comunidad"
                            className="group inline-flex items-center justify-center gap-3 bg-[#A67C00] hover:bg-[#C9A84C] text-[#001A33] px-8 py-4 rounded-full font-montserrat font-bold tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] uppercase"
                        >
                            ENTRAR A LA COMUNIDAD
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
