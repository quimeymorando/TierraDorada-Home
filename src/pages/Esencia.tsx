import { AgenciaNav } from '../components/agencia/AgenciaNav';
import {
    EsenciaHero,
    EsenciaFusion,
    EsenciaFundadores,
    EsenciaCTA,
} from '../components/agencia/EsenciaSections';
import { AgenciaFooter } from '../components/agencia/AgenciaFooter';

export default function Esencia() {
    return (
        <div
            className="min-h-screen w-full overflow-x-hidden"
            style={{ backgroundColor: '#0B1628' }}
        >
            <AgenciaNav />
            <main>
                <EsenciaHero />
                <EsenciaFusion />
                <EsenciaFundadores />
                <EsenciaCTA />
                <AgenciaFooter />
            </main>
        </div>
    );
}
