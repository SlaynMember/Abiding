import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Mail, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { 
      id: 'our-work', 
      label: 'Our Work',
      hasDropdown: true,
      dropdownItems: [
        { id: 'our-work-leaders', label: 'For Leaders & Spouses' },
        { id: 'our-work-churches', label: 'For Churches & Teams' }
      ]
    },
    { id: 'resources', label: 'Resources' },
    { id: 'give', label: 'Give' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    setIsOurWorkDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-sky-100 py-2">
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
            {navigationItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsOurWorkDropdownOpen(true)}
                    onMouseLeave={() => setIsOurWorkDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        currentPage === 'our-work-leaders' || currentPage === 'our-work-churches'
                          ? 'text-gold border-b-2 border-gold pb-1'
                          : 'text-slate-secondary hover:text-primary-ink'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transition-transform ${isOurWorkDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isOurWorkDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.id}
                            onClick={() => handleNavClick(dropdownItem.id)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                              currentPage === dropdownItem.id
                                ? 'text-gold bg-gold/10'
                                : 'text-slate-secondary hover:text-primary-ink hover:bg-gray-50'
                            }`}
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-gold border-b-2 border-gold pb-1'
                        : 'text-slate-secondary hover:text-primary-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
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
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <div className="font-medium text-primary-ink px-4 py-2 text-sm">
                      {item.label}
                    </div>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() => handleNavClick(dropdownItem.id)}
                        className={`block w-full text-left py-2 px-8 ml-4 rounded-lg transition-colors text-sm ${
                          currentPage === dropdownItem.id
                            ? 'bg-sky-callout text-gold font-medium'
                            : 'text-slate-secondary hover:bg-wheat-bg hover:text-primary-ink'
                        }`}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-sky-callout text-gold font-medium'
                        : 'text-slate-secondary hover:bg-wheat-bg hover:text-primary-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            {/* Connect button in mobile menu */}
            <button
              onClick={() => handleNavClick('connect')}
              className="block w-full text-left py-3 px-4 bg-gold text-white rounded-lg font-medium hover:bg-gold/90 transition-colors"
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;