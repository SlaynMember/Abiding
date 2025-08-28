import React from 'react';
import { Phone, Heart, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-primary-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 relative">
              <div className="w-12 h-12 bg-white/10 rounded-full p-2 flex items-center justify-center relative">
                <img 
                  src="/mainlogonotext.svg" 
                  alt="Abiding Partners Logo" 
                  className="w-full h-full"
                />
                {/* Small vine accent on footer logo */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border border-white/30 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-fraunces font-semibold text-xl">Abiding Partners</h3>
                <p className="text-sm text-gray-300">Spiritual Mentorship for Ministry Leaders</p>
              </div>
              {/* Footer vine decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border border-gold/20 rounded-full opacity-40"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Friendship and guidance for pastors and Christian leaders.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Weekly Encouragement</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="bg-gold text-primary-ink px-4 py-2 rounded-lg font-medium hover:bg-gold/90 transition-colors">
                  Subscribe to weekly encouragement
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                We will only use your email to send encouragement and resources. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Ministry</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('our-story')} className="text-gray-300 hover:text-gold transition-colors">Our Story</button></li>
              <li><button onClick={() => setCurrentPage('how-we-help')} className="text-gray-300 hover:text-gold transition-colors">How We Help</button></li>
              <li><button onClick={() => setCurrentPage('values')} className="text-gray-300 hover:text-gold transition-colors">Values</button></li>
              <li><button onClick={() => setCurrentPage('resources')} className="text-gray-300 hover:text-gold transition-colors">Resources</button></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <Phone size={16} />
                  <span>Book a conversation</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('give')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <Heart size={16} />
                  <span>Support the work</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('stories')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <Mail size={16} />
                  <span>Subscribe to weekly encouragement</span>
                </button>
              </li>
            </ul>

            {/* Cities We Serve */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-sm">Cities We Serve</h5>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>Phoenix</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>San Antonio</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>Franklin</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>Tampa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>McKinney</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>Brooklyn</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2025 Abiding Partners. All rights reserved.</p>
            <p>Privacy - We protect confidentiality and honor sensitive conversations.</p>
          </div>
          <p className="mt-4 text-sm">Cities - Phoenix, San Antonio, Franklin, Tampa, McKinney, Brooklyn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;