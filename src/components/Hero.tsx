import { motion } from 'framer-motion';
import { SpaceBackground } from './SpaceBackground';

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
            <SpaceBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl relative z-10"
            >
                <div className="mb-8 inline-block border-b border-[#A67C00]/50 px-4 py-2 text-[10px] font-bold tracking-[0.5em] text-white/50 uppercase">
                    Ingeniería Holística al Servicio
                </div>

                <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-cinzel mb-12 text-white leading-tight font-black text-shadow-glow">
                    TIERRA <br />
                    <span className="text-gold-gradient italic">DORADA</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/70 tracking-[0.2em] uppercase mb-16 max-w-3xl mx-auto leading-relaxed">
                    Integración del Cielo y la Tierra. Materializa tu espíritu.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="button-gold-metallic px-12 py-5 rounded-full font-cinzel text-xs tracking-[0.3em]">
                        DAR EL SALTO
                    </button>
                    <button className="px-12 py-5 border border-white/20 rounded-full font-cinzel text-xs tracking-[0.3em] hover:bg-white/5 transition-all">
                        LA NAVE
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
