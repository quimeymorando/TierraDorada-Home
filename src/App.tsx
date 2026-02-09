import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Tierra Dorada | La Nave Madre';
        break;
      case '/nodriza':
        document.title = 'NODRIZA | Sincronizando...';
        break;
      case '/abundancia-masterclass':
        document.title = 'ABUNDANCIA | Accediendo...';
        break;
      default:
        document.title = 'Tierra Dorada';
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
          <Route path="/" element={<Home />} />
          <Route path="/nodriza" element={
            <div className="flex min-h-screen items-center justify-center bg-bg text-gray-900">
              <h1 className="text-2xl font-black text-primary animate-pulse tracking-[0.5em] uppercase">Sincronizando con Nodriza...</h1>
            </div>
          } />
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

