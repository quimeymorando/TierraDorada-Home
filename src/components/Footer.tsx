import { Star, Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full relative bg-[#000812] border-t border-[#A67C00]/20 overflow-hidden">
            {/* Elementos de fondo Premium */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#A67C00]/50 to-transparent" />
                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A67C00]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12 lg:mb-16">
                    
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-2 mb-4 text-[#A67C00]">
                            {[1, 2, 3].map(i => <Star key={i} className="h-4 w-4 fill-current opacity-80" />)}
                        </div>
                        <h4 className="font-cinzel text-xl text-white mb-3 tracking-wider">
                            Tierra <span className="text-[#C9A84C]">Dorada</span>
                        </h4>
                        <p className="font-montserrat text-xs text-white/50 leading-relaxed max-w-sm mb-6">
                            Ingeniería Holística y Desarrollo de Consciencia. 
                            Construyendo puentes entre lo terrenal y lo divino a través de la tecnología y el despertar.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://instagram.com/tierradorada.ar" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300">
                                <Instagram className="w-3.5 h-3.5" />
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300">
                                <Youtube className="w-3.5 h-3.5" />
                            </a>
                            <a href="mailto:contacto@tierradorada.ar" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300">
                                <Mail className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Links Column 1 */}
                    <div className="col-span-1 justify-center md:justify-start flex md:col-span-3 lg:col-span-3">
                        <div className="flex flex-col text-center md:text-left">
                            <h5 className="font-montserrat text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-4">Explorar</h5>
                            <a href="https://tierradorada.ar/comunidad" className="group flex items-center justify-center md:justify-start gap-2 text-xs text-white/50 hover:text-white mb-3 transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Comunidad</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Comunidad</span>
                                </span>
                            </a>
                            <a href="https://nodriza.tierradorada.ar" className="group flex items-center justify-center md:justify-start gap-2 text-xs text-white/50 hover:text-white mb-3 transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Nodriza</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Nodriza</span>
                                </span>
                            </a>
                            <a href="https://tierradorada.ar/abundancia" className="group flex items-center justify-center md:justify-start gap-2 text-xs text-white/50 hover:text-white mb-3 transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Masterclass</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Masterclass</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Links Column 2 */}
                    <div className="col-span-1 justify-center md:justify-start flex md:col-span-3 lg:col-span-3">
                        <div className="flex flex-col text-center md:text-left">
                            <h5 className="font-montserrat text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-4">Ecosistema</h5>
                            <a href="/agencia" className="group flex items-center justify-center md:justify-start gap-2 text-xs text-white/50 hover:text-white mb-3 transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Agencia Tierra Dorada</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Agencia Tierra Dorada</span>
                                </span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[#C9A84C]" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[9px] sm:text-[10px] font-medium text-white/30 uppercase tracking-[0.3em] text-center md:text-left">
                        © {new Date().getFullYear()} TIERRA DORADA. TODOS LOS RESERVADOS.
                    </p>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A67C00] animate-pulse" />
                        <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.2em]">
                            Est. 2026 — Ingeniería Holística
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
