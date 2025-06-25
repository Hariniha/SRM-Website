import { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'About Us', 
    'Academics',
    'Campus Life',
    'Professional Activities',
    'Careers'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/90 shadow-sm' 
        : 'backdrop-blur-sm bg-white/70'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-black hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Combined rounded div for both buttons */}
          <div className="bg-yellow-400 rounded-full p-1 flex items-center space-x-1">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200">
              Admission
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;