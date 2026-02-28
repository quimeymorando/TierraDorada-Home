import { AgenciaNav } from '../components/agencia/AgenciaNav';
import { AgenciaHero } from '../components/agencia/AgenciaHero';
import { AgenciaEsencia } from '../components/agencia/AgenciaEsencia';
import { AgenciaServicios } from '../components/agencia/AgenciaServicios';
import { AgenciaFooter } from '../components/agencia/AgenciaFooter';

export default function Agencia() {
    return (
        <div
            className="min-h-screen w-full overflow-x-hidden"
            style={{ backgroundColor: '#0B1628' }}
        >
            <AgenciaNav />
            <main>
                <AgenciaHero />
                <AgenciaEsencia />
                <AgenciaServicios />
                <AgenciaFooter />
            </main>
        </div>
    );
}
