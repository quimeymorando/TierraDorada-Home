import { AgenciaNav } from '../components/agencia/AgenciaNav';
import {
    ServiciosHero,
    SeccionWebs,
    SeccionManychat,
    SeccionAds,
    SeccionSetters,
    SeccionIdentidad,
    SeccionAudiovisual,
} from '../components/agencia/ServiciosSections';
import { AgenciaFooter } from '../components/agencia/AgenciaFooter';

export default function Servicios() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: '#0B1628' }}>
            <AgenciaNav />
            <main>
                <ServiciosHero />
                <SeccionWebs />
                <SeccionManychat />
                <SeccionAds />
                <SeccionSetters />
                <SeccionIdentidad />
                <SeccionAudiovisual />
                <AgenciaFooter />
            </main>
        </div>
    );
}
