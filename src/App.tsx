import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import NodrizaPreparacion from './pages/NodrizaPreparacion';
import Home from './pages/Home';
import Agencia from './pages/Agencia';
import Esencia from './pages/Esencia';
import Servicios from './pages/Servicios';

function TitleUpdater() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    switch (location.pathname) {
      case '/servicios':
        document.title = 'Agencia Tierra Dorada | Servicios';
        break;
      case '/esencia':
        document.title = 'Agencia Tierra Dorada | Nuestra Esencia';
        break;
      case '/agencia':
        document.title = 'Agencia Tierra Dorada | Tecnología & Consciencia';
        break;
      case '/':
        document.title = 'Tierra Dorada | La Nave Madre';
        break;
      case '/nodriza':
        document.title = 'NODRIZA | Sincronizando...';
        break;
      case '/confirmacion-nodriza':
        document.title = 'NODRIZA | Preparación';
        break;
      case '/abundancia-masterclass':
        document.title = 'ABUNDANCIA | Accediendo...';
        break;
      default:
        document.title = 'Tierra Dorada';
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      // @ts-ignore
      if (window.fbq) {
        // @ts-ignore
        window.fbq('track', 'PageView');
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="full-screen-overlay">
      <Router>
        <TitleUpdater />
        <Routes>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/esencia" element={<Esencia />} />
          <Route path="/agencia" element={<Agencia />} />
          <Route path="/" element={<Home />} />
          <Route path="/nodriza" element={
            <div className="flex min-h-screen items-center justify-center bg-bg text-gray-900">
              <h1 className="text-2xl font-black text-primary animate-pulse tracking-[0.5em] uppercase">Sincronizando con Nodriza...</h1>
            </div>
          } />
          <Route path="/confirmacion-nodriza" element={<NodrizaPreparacion />} />
          <Route path="/abundancia-masterclass" element={
            <div className="flex min-h-screen items-center justify-center bg-bg text-gray-900">
              <h1 className="text-2xl font-black text-accent animate-pulse tracking-[0.5em] uppercase">Accediendo a la Abundancia...</h1>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

