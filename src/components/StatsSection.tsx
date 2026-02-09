import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function StatsSection() {
    return (
        <section className="w-full py-40 bg-[#001A33] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm"
                >
                    <div className="flex flex-col items-center gap-6 mb-12">
                        <div className="p-6 bg-[#A67C00] text-white rounded-full shadow-[0_0_30px_rgba(166,124,0,0.3)]">
                            <ShieldCheck className="h-12 w-12" />
                        </div>
                        <h4 className="text-white font-cinzel text-3xl tracking-[0.2em]">Estructura del Nuevo Sostén</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-8 items-center max-w-xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-cinzel text-gold-gradient mb-2">10K+</div>
                            <div className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">Maestros Dorados Activos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-cinzel text-gold-gradient mb-2">SIENDO</div>
                            <div className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">Estado de la Tribu</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
