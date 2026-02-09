import { Star } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full py-20 bg-[#001A33] border-t border-white/10 text-center">
            <div className="flex justify-center gap-3 mb-10 text-[#A67C00]/50">
                {[1, 2, 3].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.8em] mb-4">
                Tierra Dorada - Maestría al Servicio ®
            </p>
            <p className="text-[8px] text-white/20 font-bold uppercase tracking-[0.2em] leading-loose">
                Est. 2026 — Ingeniería Holística
            </p>
        </footer>
    );
}
