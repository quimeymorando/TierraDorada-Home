import { Hero } from '../components/Hero';
import { PortalsSection } from '../components/PortalsSection';
import { FounderSection } from '../components/FounderSection';
import { StatsSection } from '../components/StatsSection';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#001A33' }} className="min-h-screen w-full font-montserrat text-white selection:bg-yellow-500/30">
            {/* Z-10 CONTENT */}
            <main className="relative z-10 flex flex-col items-center w-full">
                <Hero />
                <PortalsSection />
                <FounderSection />
                <StatsSection />
                <Footer />
            </main>
        </div>
    );
}
