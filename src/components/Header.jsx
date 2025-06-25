import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // Track selected button

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
      <div className="max-w-7xl mx-auto px-0 sm:px-2 md:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <img 
            src="/logosrm.png" 
            alt="SRM Logo" 
            className="h-16 w-44 sm:h-20 sm:w-56 object-contain select-none -ml-4 sm:-ml-8" 
            draggable="false"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex bg-yellow-300 rounded-full p-1 items-center space-x-1">
            <button
              className={`font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200 ${selectedButton === 'Admission' ? 'bg-white text-black' : 'bg-yellow-300 text-black hover:bg-white'}`}
              onClick={() => setSelectedButton('Admission')}
              type="button"
            >
              Admission
            </button>
            <button
              className={`font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200 ${selectedButton === 'Contact' ? 'bg-white text-black' : 'bg-yellow-300 text-black hover:bg-white'}`}
              onClick={() => setSelectedButton('Contact')}
              type="button"
            >
              Contact
            </button>
          </div>

          {/* Burger Icon for Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 min-w-10 min-h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-lg z-50 animate-fade-in px-2 sm:px-6 pb-6 rounded-b-2xl">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-black hover:text-blue-600 font-medium text-base transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <button className="bg-yellow-300 hover:bg-white text-black font-semibold px-6 py-2 rounded-full text-base transition-all duration-200">
                Admission
              </button>
              <button className="bg-yellow-300 hover:bg-white text-black font-semibold px-6 py-2 rounded-full text-base transition-all duration-200">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;