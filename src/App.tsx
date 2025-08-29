import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ForLeadersAndSpouses from './pages/ForLeadersAndSpouses';
import ForChurchesAndTeams from './pages/ForChurchesAndTeams';
import Resources from './pages/Resources';
import Give from './pages/Give';
import Connect from './pages/Connect';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'our-work-leaders':
        return <ForLeadersAndSpouses />;
      case 'our-work-churches':
        return <ForChurchesAndTeams />;
      case 'resources':
        return <Resources />;
      case 'give':
        return <Give />;
      case 'connect':
        return <Connect />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-wheat-bg flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;