import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    setIsWorkMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-sky-callout py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <button
              onClick={() => handleNavClick('connect')}
              className="flex items-center space-x-2 text-primary-ink hover:text-gold transition-colors"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Book a conversation</span>
            </button>
            <button
              onClick={() => handleNavClick('give')}
              className="flex items-center space-x-2 text-primary-ink hover:text-gold transition-colors"
            >
              <Heart size={16} />
              <span className="hidden sm:inline">Support the work</span>
            </button>
            <button className="flex items-center space-x-2 text-primary-ink hover:text-gold transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">Subscribe to weekly encouragement</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/mainlogonotext.svg"
              alt="Abiding Partners Logo"
              className="w-14 h-14 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="text-left">
              <h1 className="font-fraunces font-semibold text-xl text-primary-ink">Abiding Partners</h1>
              <p className="text-sm text-slate-secondary group-hover:text-primary-ink transition-colors">Spiritual Mentorship for Ministry Leaders</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-slate-secondary hover:text-primary-ink'}`}>Home</button>
            <button onClick={() => handleNavClick('about')} className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-gold' : 'text-slate-secondary hover:text-primary-ink'}`}>About</button>
            <div
              className="relative flex items-center"
              onMouseEnter={() => setIsWorkMenuOpen(true)}
              onMouseLeave={() => setIsWorkMenuOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors h-10 flex items-center ${currentPage.startsWith('our-work') ? 'text-gold' : 'text-slate-secondary hover:text-primary-ink'}`}
                style={{ minHeight: '2.5rem' }}
              >
                Our Work
              </button>
              {isWorkMenuOpen && (
                <div
                  className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1"
                  onMouseEnter={() => setIsWorkMenuOpen(true)}
                  onMouseLeave={() => setIsWorkMenuOpen(false)}
                >
                  <button onClick={() => handleNavClick('our-work-leaders')} className="block w-full text-left px-4 py-2 text-sm text-slate-secondary hover:bg-gray-100">For Leaders & Spouses</button>
                  <button onClick={() => handleNavClick('our-work-churches')} className="block w-full text-left px-4 py-2 text-sm text-slate-secondary hover:bg-gray-100">For Churches & Teams</button>
                </div>
              )}
            </div>
            <button onClick={() => handleNavClick('resources')} className={`text-sm font-medium transition-colors ${currentPage === 'resources' ? 'text-gold' : 'text-slate-secondary hover:text-primary-ink'}`}>Resources</button>
            <button onClick={() => handleNavClick('give')} className={`text-sm font-medium transition-colors ${currentPage === 'give' ? 'text-gold' : 'text-slate-secondary hover:text-primary-ink'}`}>Give</button>
          </nav>

          {/* Connect Button */}
          <button
            onClick={() => handleNavClick('connect')}
            className="hidden lg:block bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold/90 transition-colors"
          >
            Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">Home</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">About</button>
            <button onClick={() => handleNavClick('our-work-leaders')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">For Leaders & Spouses</button>
            <button onClick={() => handleNavClick('our-work-churches')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">For Churches & Teams</button>
            <button onClick={() => handleNavClick('resources')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">Resources</button>
            <button onClick={() => handleNavClick('give')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">Give</button>
            <button onClick={() => handleNavClick('connect')} className="block w-full text-left py-2 px-4 rounded-md text-slate-secondary hover:bg-gray-100">Connect</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
