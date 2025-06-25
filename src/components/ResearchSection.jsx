const ResearchSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-center bg-gray-50">
      {/* Research Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        Research
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-2xl sm:max-w-4xl mx-auto">
        Driving Innovation In Allied Health Research
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
        Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical
        Practice, Diagnostics, And Public Health Outcomes.
      </p>

      {/* Explore Button */}
      <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-base sm:text-lg transition-colors duration-200 mb-8 sm:mb-16">
        Explore Our Research
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </button>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Active Research Projects */}
        <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-colors duration-200">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <circle cx="10" cy="16" r="2"/>
              <path d="M16 16h-4"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-4">94+</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Active Research Projects</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Across Rehabilitation, Diagnostics, Imaging & Community Health.
          </p>
        </div>

        {/* Intellectual Property Rights */}
        <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-colors duration-200">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <circle cx="12" cy="18" r="2"/>
              <path d="M9 15v3h6v-3"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-4">468+</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property Rights</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Under Our Intellectual Property Rights (IPR) Cell.
          </p>
        </div>

        {/* Collaborative Partnerships */}
        <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-colors duration-200">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-4">20+</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Partnerships</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            With Hospitals, Research Bodies & Academic Institutions.
          </p>
        </div>

        {/* Student Research Engagement */}
        <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-colors duration-200">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-4">100+</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Research Engagement</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            With Hospitals, Research Bodies & Academic Institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;