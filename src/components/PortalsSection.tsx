import { Crown, Sparkles, Zap, Heart, Compass, Sun } from 'lucide-react';
import PortalCard from './PortalCard';

export function PortalsSection() {
    return (
        <section className="w-full py-32 md:py-48 bg-white text-[#001A33] relative z-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-24">
                    <span className="text-[#A67C00] font-cinzel text-xs tracking-[0.4em] mb-4 block font-bold">Rutas de Elevación</span>
                    <h2 className="text-4xl md:text-6xl font-cinzel mb-8">ELIGE TU <span className="text-gold-gradient">PORTAL</span></h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-montserrat leading-relaxed font-medium">
                        Tu propósito no tiene otra opción. Selecciona el portal de tu alineación álmica y expande tu realidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    <PortalCard
                        title="NODRIZA"
                        subtitle="Soberanía económica y liderazgo cuántico real."
                        href="/nodriza"
                        variant="gold"
                        icon={<Crown className="h-10 w-10" />}
                    />
                    <PortalCard
                        title="ABUNDANCIA"
                        subtitle="Maestría dorada: Leyes universales de la riqueza."
                        href="/abundancia-masterclass"
                        variant="purple"
                        icon={<Sparkles className="h-10 w-10" />}
                    />
                    <PortalCard
                        title="LO HAGO REAL"
                        subtitle="Taller de manifestación: Convirtiendo el espíritu en materia."
                        href="/taller-lo-hago-real"
                        variant="cyan"
                        icon={<Zap className="h-10 w-10" />}
                    />
                    <PortalCard
                        title="MEJORA VÍNCULOS"
                        subtitle="Transforma tus relaciones desde la coherencia y el amor consciente."
                        href="/mejora-tus-vinculos"
                        variant="rose"
                        icon={<Heart className="h-10 w-10" />}
                    />
                    <PortalCard
                        title="INGENIERÍA PROPÓSITO"
                        subtitle="Diseña la estructura de tu misión y construye tu legado."
                        href="/taller-ingenieria-de-proposito"
                        variant="sky"
                        icon={<Compass className="h-10 w-10" />}
                    />
                    <PortalCard
                        title="DESPLIEGA TU PROPÓSITO"
                        subtitle="Libera tu potencial y alíneate con tu misión de vida."
                        href="/despliega-tu-proposito"
                        variant="emerald"
                        icon={<Sun className="h-10 w-10" />}
                    />
                </div>
            </div>
        </section>
    );
}
