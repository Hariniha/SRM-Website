const ProgramsSection = () => {
  const programs = [
    { name: "B.Sc Cardio Perfusion Technology", type: "undergraduate" },
    { name: "B.Sc Clinical Psychology", type: "postgraduate" },
    { name: "B.Sc Cardio Perfusion Technology", type: "undergraduate" },
    { name: "B.Sc Medical Imaging Technology", type: "undergraduate" },
    { name: "B.Sc Physician Assistant", type: "undergraduate" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Title and DNA Helix */}
          <div className="relative">
            {/* DNA Helix Background */}
            <div className="absolute -left-20 -top-10 w-80 h-80 opacity-20">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* DNA Helix Structure */}
                <path
                  d="M50 50 Q200 100 350 50 Q200 150 50 200 Q200 250 350 300 Q200 350 50 400"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  fill="none"
                  className="opacity-60"
                />
                <path
                  d="M350 50 Q200 100 50 150 Q200 200 350 250 Q200 300 50 350"
                  stroke="#60A5FA"
                  strokeWidth="6"
                  fill="none"
                  className="opacity-40"
                />
                {/* DNA Base Pairs */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <line
                    key={i}
                    x1={50 + (i * 20)}
                    y1={50 + (i * 25)}
                    x2={350 - (i * 20)}
                    y2={50 + (i * 25)}
                    stroke="#93C5FD"
                    strokeWidth="2"
                    className="opacity-30"
                  />
                ))}
              </svg>
            </div>

            {/* Program Offered Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-8 relative z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Program Offered</span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 relative z-10">
              Our Allied Health Sciences Programs
            </h2>

            {/* Explore Now Button */}
            <button className="inline-flex items-center bg-yellow-300 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl relative z-10">
              Explore Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Center - Medical Students Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Medical students"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg mb-2 opacity-90">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
                </p>
                <div className="flex items-center">
                  <span className="text-yellow-400 font-semibold">Duration: </span>
                  <span className="ml-1 font-medium">3 Year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Program List */}
          <div className="space-y-6">
            {/* Toggle Buttons */}
            <div className="bg-yellow-400 rounded-full p-1 flex items-center w-fit">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-sm">
                Under Graduate
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200">
                Post Graduate
              </button>
            </div>

            {/* Programs List */}
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                >
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {program.name}
                    </h3>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* View All Programs Link */}
            <div className="pt-4">
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 font-medium text-lg transition-colors duration-200 inline-flex items-center"
              >
                View All Programs
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;