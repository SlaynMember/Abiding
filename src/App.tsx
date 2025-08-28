import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ForLeadersAndSpouses from './pages/ForLeadersAndSpouses';
import ForChurchesAndTeams from './pages/ForChurchesAndTeams';
import Values from './pages/Values';
import PastorsWeWalkWith from './pages/PastorsWeWalkWith';
import StoriesTestimonials from './pages/StoriesTestimonials';
import Resources from './pages/Resources';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'our-work-leaders':
        return <ForLeadersAndSpouses />;
      case 'our-work-churches':
        return <ForChurchesAndTeams />;
      case 'values':
        return <Values />;
      case 'pastors':
        return <PastorsWeWalkWith />;
      case 'stories':
        return <StoriesTestimonials />;
      case 'resources':
        return <Resources />;
      case 'give':
        return <Give />;
      case 'connect':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;