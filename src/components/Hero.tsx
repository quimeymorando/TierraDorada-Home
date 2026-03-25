import { motion } from 'framer-motion';
import { SpaceBackground } from './SpaceBackground';

export function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
            <SpaceBackground />
            
            <div className="absolute top-8 left-8 z-20">
                <img src="/favicon.png" alt="Logo Tierra Dorada" className="w-20 h-20 md:w-28 md:h-28" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl relative z-10 pt-16"
            >
                <div className="mb-8 inline-block border-b border-[#A67C00]/50 px-4 py-2 text-[10px] font-bold tracking-[0.5em] text-white/50 uppercase">
                    Ingeniería Holística al Servicio
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-berliner mb-12 text-white leading-tight text-shadow-glow">
                    TIERRA <br />
                    <span className="text-gold-gradient">DORADA</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/70 tracking-[0.2em] uppercase mb-16 max-w-3xl mx-auto leading-relaxed">
                    Integración del Cielo y la Tierra. Materializa tu espíritu.
                </p>


            </motion.div>
        </section>
    );
}
