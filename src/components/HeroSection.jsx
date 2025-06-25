import DNAHelix from './DNAHelix';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br pt-6 bg-white from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* DNA Helix positioned behind the text */}
      <DNAHelix />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full pt-10 sm:pt-16 lg:pt-20">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-20">
                Shaping Healthcare
                <br />
                <span className="text-gray-900">Leaders of Tomorrow</span>
              </h1>
              
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-600 max-w-xl relative z-20">
                <p className="leading-relaxed">
                  Immerse Yourself In A Dynamic Learning Environment
                </p>
                <p className="leading-relaxed">
                  Dedicated To Excellence In Healthcare Education.
                </p>
              </div>
            </div>

            <div className="flex items-center relative z-20">
              <button className="group bg-gray-100 hover:bg-yellow-300 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg text-base sm:text-lg">
                <span>Explore Now</span>
                <div className="w-9 h-9 bg-yellow-300 rounded-full flex items-center justify-center ml-2 rotate-320">
                  <svg 
                    className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - College Building */}
          <div className="relative z-20">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SRM Medical College Building"
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-gray-700 ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Program Offered Badge */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-full p-2 sm:p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-3 h-3 text-blue-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800 text-sm">Program Offered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Yellow Banner at bottom */}
      <div className="absolute left-0 right-0 h-16 sm:h-20 bg-yellow-300 transform rotate-1 origin-bottom-left overflow-hidden z-30"
        style={{ bottom: '1rem' }} // 8 for desktop, override below for mobile
      >
        <div className="flex animate-scroll h-full items-center">
          <div className="flex whitespace-nowrap">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} className="text-black font-bold text-lg px-6">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit + 
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Responsive gap for mobile/tab */}
      <div className="block sm:hidden" style={{ height: '3.5rem' }} />
      <div className="hidden sm:block lg:hidden" style={{ height: '2rem' }} />
     
    </section>
  );
};

export default HeroSection;