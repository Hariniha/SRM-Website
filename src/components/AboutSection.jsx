const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image and Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Medical students in classroom"
                className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-4">
                {/* 25 Years Legacy */}
                <div className="bg-blue-500 rounded-2xl p-4 sm:p-6 flex-1 text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">25</div>
                  <div className="text-lg font-medium">Year of Legacy</div>
                </div>
                
                {/* 18+ Specialized Programs */}
                <div className="bg-blue-500 rounded-2xl p-4 sm:p-6 flex-1 text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">18+</div>
                  <div className="text-lg font-medium">Specialized Programs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            {/* About Us Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">About Us</span>
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
            <button className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Read More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;