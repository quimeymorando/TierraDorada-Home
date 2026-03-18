import { Star, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full relative bg-[#000812] border-t border-[#A67C00]/20 overflow-hidden">
            {/* Elementos de fondo Premium */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#A67C00]/50 to-transparent" />
                <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#A67C00]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 pt-12 pb-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-8 lg:mb-12">
                    
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-2 mb-4 text-[#A67C00]">
                            {[1, 2, 3].map(i => <Star key={i} className="h-6 w-6 fill-current opacity-80" />)}
                        </div>
                        <h4 className="font-cinzel text-3xl lg:text-4xl text-white mb-4 tracking-wider uppercase">
                            Tierra <span className="text-[#C9A84C]">Dorada</span>
                        </h4>
                        <p className="font-montserrat text-base text-white/50 leading-relaxed max-w-md">
                            El punto de encuentro entre la Ingeniería Holística y el despertar de la consciencia. 
                            Materializamos el espíritu a través de tecnología con alma.
                        </p>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Links Column 1 */}
                    <div className="col-span-1 justify-center md:justify-start flex md:col-span-6 lg:col-span-4 mt-8 md:mt-0">
                        <div className="flex flex-col text-center md:text-left">
                            <h5 className="font-montserrat text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-5 opacity-80">Navegación</h5>
                            
                            <a href="https://tierradorada.ar/comunidad" className="group flex items-center justify-center md:justify-start gap-2 text-sm text-white/50 hover:text-white mb-4 transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Unirse a la Comunidad</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Unirse a la Comunidad</span>
                                </span>
                            </a>

                            <a href="/agencia" className="group flex items-center justify-center md:justify-start gap-2 text-sm text-white/50 hover:text-white transition-colors">
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Agencia Tierra Dorada</span>
                                    <span className="absolute left-0 top-0 inline-block translate-y-full text-[#C9A84C] transition-transform duration-300 group-hover:translate-y-0">Agencia Tierra Dorada</span>
                                </span>
                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[#C9A84C]" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] sm:text-[11px] font-medium text-white/20 uppercase tracking-[0.4em] text-center md:text-left">
                        © {new Date().getFullYear()} TIERRA DORADA
                    </p>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A67C00]/40 animate-pulse" />
                        <p className="text-[10px] sm:text-[11px] text-white/20 font-bold uppercase tracking-[0.3em]">
                            Maestría al Servicio — Ingeniería Holística
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
