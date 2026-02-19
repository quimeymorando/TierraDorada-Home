import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FounderSection() {
    return (
        <section className="w-full py-32 bg-[#FDFCFB] text-[#001A33] relative overflow-hidden border-t border-slate-100">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFD700] blur-[120px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#A67C00] blur-[100px] mix-blend-multiply opacity-50" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left order-2 lg:order-1"
                    >
                        <span className="text-[#A67C00] font-cinzel text-xs tracking-[0.4em] mb-6 block font-bold uppercase">
                            El Canal
                        </span>
                        <h2 className="text-5xl md:text-7xl font-cinzel mb-8 leading-none">
                            JOAQUIN <br />
                            <span className="text-gold-gradient italic">ALTERMAN</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-montserrat leading-relaxed mb-10 max-w-xl font-medium">
                            La mente y el corazón detrás de la arquitectura de <span className="font-bold text-[#A67C00]">Tierra Dorada</span>.
                            <br /><br />
                            Un espacio donde la ingeniería humana se encuentra con la profundidad del espíritu para materializar una nueva realidad.
                        </p>

                        <a href="/joaquinalterman" className="group inline-flex items-center gap-4 text-[#001A33] font-cinzel font-bold tracking-[0.2em] text-sm hover:text-[#A67C00] transition-colors uppercase">
                            <span className="border-b border-[#001A33]/30 pb-1 group-hover:border-[#A67C00] transition-colors">Conocer al Creador</span>
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Visual Presentation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-sm lg:max-w-md order-1 lg:order-2"
                    >
                        <div className="aspect-[3/4] relative rounded-sm overflow-hidden border border-[#A67C00]/20 bg-white shadow-[0_20px_50px_rgba(166,124,0,0.15)] group cursor-pointer">
                            <a href="/joaquinalterman" className="absolute inset-0 block overflow-hidden transition-transform duration-700 hover:scale-105">
                                {/* Imagen de Joaquin */}
                                <img
                                    src="https://assets.cdn.filesafe.space/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png"
                                    alt="Joaquin Alterman - Fundador de Tierra Dorada"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Marco interno dorado */}
                                <div className="absolute inset-3 border border-[#A67C00]/30 pointer-events-none z-10" />
                                {/* Etiqueta FUNDADOR */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                                    <span className="font-cinzel text-xs text-white tracking-[0.4em] bg-[#001A33]/60 backdrop-blur-sm px-4 py-2 border border-[#A67C00]/40">FUNDADOR</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
