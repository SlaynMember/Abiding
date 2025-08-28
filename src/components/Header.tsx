import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'how-we-help', label: 'How We Help' },
    { id: 'values', label: 'Values' },
    { id: 'pastors', label: 'Pastors We Walk With' },
    { id: 'stories', label: 'Stories & Testimonials' },
    { id: 'resources', label: 'Resources' },
    { id: 'give', label: 'Give' },
    { id: 'contact', label: 'Contact & Book' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-sky-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <button 
              onClick={() => handleNavClick('contact')}
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
            <div className="relative">
              <img 
                src="/mainlogonotext.svg" 
                alt="Abiding Partners Logo" 
                className="w-14 h-14 group-hover:scale-105 transition-transform duration-200"
              />
              {/* Subtle vine accent */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border border-gold/30 rounded-full opacity-60"></div>
            </div>
            <div className="text-left">
              <h1 className="font-fraunces font-semibold text-xl text-primary-ink">Abiding Partners</h1>
              <p className="text-sm text-slate-secondary group-hover:text-primary-ink transition-colors">Spiritual Mentorship for Ministry Leaders</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.slice(0, 8).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-slate-secondary hover:text-primary-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:block bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold/90 transition-colors"
          >
            Contact & Book
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
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-sky-callout text-gold font-medium'
                    : 'text-slate-secondary hover:bg-wheat-bg hover:text-primary-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;