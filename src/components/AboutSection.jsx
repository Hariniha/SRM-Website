const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Image and Stats */}
          <div className="relative h-[550px] flex items-stretch">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <img 
                src='/auditorium.jpg'
                alt="SRM Auditorium"
                className="w-full h-full object-cover min-h-[350px]"
              />
              
              {/* Blurred overlay at the bottom */}
              <div className="absolute rounded-2xl left-0 right-0 bottom-0 h-16 lg:h-28 xl:h-32 bg-white/60 backdrop-blur-md z-10 rounded-b-3xl flex flex-row gap-2 lg:gap-4 items-end px-2 lg:px-4 pb-2 lg:pb-4">
  {/* 25 Years Legacy */}
  <div className="flex flex-row items-end flex-1 gap-2 lg:gap-3 justify-center border-r-2 border-white">
    <div className="bg-blue-500 rounded-2xl p-2 lg:p-4 text-white shadow-lg text-2xl lg:text-4xl font-bold">25</div>
    <div className="flex flex-col text-black font-medium text-left mb-1 leading-tight" style={{ fontFamily: 'Marcellus, serif', fontWeight: 400, fontSize: '18px', lineHeight: '22px', lgFontSize: '29px', lgLineHeight: '33px' }}>
      <span className="lg:text-[29px] lg:leading-[33px]">Year of</span>
      <span className="lg:text-[29px] lg:leading-[33px]">Legacy</span>
    </div>
  </div>
  
  {/* 18+ Specialized Programs */}
  <div className="flex flex-row items-end flex-1 gap-2 lg:gap-3 justify-center">
    <div className="bg-blue-500 rounded-2xl p-2 lg:p-4 text-white shadow-lg text-2xl lg:text-4xl font-bold">18+</div>
    <div className="flex flex-col text-black font-medium text-left mb-1 leading-tight" style={{ fontFamily: 'Marcellus, serif', fontWeight: 400, fontSize: '18px', lineHeight: '22px', lgFontSize: '29px', lgLineHeight: '33px' }}>
      <span className="lg:text-[29px] lg:leading-[33px]">Specialized</span>
      <span className="lg:text-[29px] lg:leading-[33px]">Programs</span>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed h-[550px] flex flex-col justify-center mt-14 sm:mt-0">
            {/* About Us Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-2 py-1 shadow-sm w-fit min-w-0">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium text-base">About Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Shaping Healthcare Leaders For A Better Tomorrow
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Welcome To SRM Institute Of Allied Health Sciences, A Pioneering Institution 
                Where Academic Excellence Meets Clinical Innovation. Our Programs Are 
                Designed To Empower Students
              </p>
              
              <p>
                At SRM AHS, We Are Not Just A College We Are A Vibrant Community Of 
                Future Healthcare Professionals, Researchers, And Innovators. Join Us As 
                We Redefine The Future Of Health And Wellness Through World-Class 
                Education, Hands-On Training, And A Passion For Making A Difference.
              </p>
            </div>

            {/* Read More Button */}
           <div className="flex  items-center h-full">
  <button
    className="inline-flex items-center bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-3 py-1 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl w-fit min-w-0"
  >
    Read More
    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;