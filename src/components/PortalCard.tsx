import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PortalCardProps {
    title: string;
    subtitle: string;
    href: string;
    variant?: 'gold' | 'purple' | 'cyan' | 'rose' | 'sky' | 'emerald';
    icon: ReactNode;
}

const variants = {
    gold: {
        accent: '#A67C00',
        glow: 'hover:shadow-[0_20px_40px_rgba(166,124,0,0.15)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    },
    purple: {
        accent: '#4F46E5',
        glow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    },
    cyan: {
        accent: '#0284C7',
        glow: 'hover:shadow-[0_20px_40px_rgba(2,132,199,0.1)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    },
    sky: {
        accent: '#0EA5E9',
        glow: 'hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    },
    rose: {
        accent: '#E11D48',
        glow: 'hover:shadow-[0_20px_40px_rgba(225,29,72,0.15)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    },
    emerald: {
        accent: '#10B981',
        glow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]',
        iconBg: 'bg-white shadow-md border-slate-100'
    }
};

export default function PortalCard({ title, subtitle, href, variant = 'gold', icon }: PortalCardProps) {
    const v = variants[variant];

    return (
        <motion.a
            href={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            style={{ backgroundColor: '#FDFCFB' }}
            className={`group relative flex h-full w-full flex-col items-center text-center p-12 border border-slate-200 rounded-sm transition-all duration-500 overflow-hidden ${v.glow}`}
        >
            {/* Background Glyph */}
            <span
                style={{ color: '#001A33', opacity: 0.03 }}
                className="absolute -right-4 -top-4 text-[130px] font-cinzel pointer-events-none select-none z-0"
            >
                {title.charAt(0)}
            </span>

            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Icon Container */}
                <div
                    style={{ color: v.accent }}
                    className={`mb-8 p-5 rounded-full border ${v.iconBg} transition-all duration-500 group-hover:scale-110`}
                >
                    {icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-cinzel mb-4 tracking-[0.2em] text-[#001A33] group-hover:text-[#A67C00] transition-colors duration-300">
                    {title}
                </h3>

                <div
                    style={{ backgroundColor: '#A67C00', opacity: 0.2 }}
                    className="w-10 h-0.5 mb-8 mx-auto"
                />

                <p className="text-slate-500 font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed mb-10 max-w-[240px]">
                    {subtitle}
                </p>

                {/* CTA Link */}
                <div
                    style={{ color: '#A67C00' }}
                    className="mt-auto flex items-center gap-2 font-cinzel text-[10px] font-bold tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-all"
                >
                    <span>ACCEDER</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Bottom Border Accent */}
            <div
                style={{ backgroundColor: '#A67C00' }}
                className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700"
            />
        </motion.a>
    );
}
