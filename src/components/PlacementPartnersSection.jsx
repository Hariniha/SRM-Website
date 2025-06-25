const PlacementPartnersSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Student Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left - Light Blue Card */}
          <div className="bg-blue-100 rounded-2xl p-6 relative overflow-hidden">
            <div className="bg-white rounded-lg px-4 py-2 mb-4 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-800">SRM PRIME</span>
                <span className="text-xs text-gray-500">HOSPITAL</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded px-2 py-1 text-xs text-gray-600">
              Batch 2024-2025
            </div>
            <div className="mt-auto pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Swetha</h3>
              <p className="text-blue-600 text-sm font-medium">Physiotherapist</p>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-t from-blue-200 to-transparent rounded-bl-full"></div>
          </div>

          {/* Top Right - Yellow Card */}
          <div className="bg-yellow-200 rounded-2xl p-6 relative overflow-hidden">
            <div className="bg-white rounded-lg px-4 py-2 mb-4 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-sm font-medium text-gray-800">Apollo</span>
                <span className="text-xs text-gray-500">HOSPITALS</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded px-2 py-1 text-xs text-gray-600">
              Batch 2024-2025
            </div>
            <div className="mt-auto pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Raghul</h3>
              <p className="text-blue-600 text-sm font-medium">Physiotherapist</p>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-t from-yellow-300 to-transparent rounded-bl-full"></div>
          </div>

          {/* Bottom Left - Yellow Card */}
          <div className="bg-yellow-300 rounded-2xl p-6 relative overflow-hidden">
            <div className="bg-white rounded-lg px-4 py-2 mb-4 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-sm font-medium text-gray-800">SRM</span>
                <span className="text-xs text-gray-500">INSTITUTE</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded px-2 py-1 text-xs text-gray-600">
              Batch 2024-2025
            </div>
            <div className="mt-auto pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Saranya Mohan</h3>
              <p className="text-blue-600 text-sm font-medium">Physiotherapist</p>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-t from-yellow-400 to-transparent rounded-bl-full"></div>
          </div>

          {/* Bottom Right - Blue Card */}
          <div className="bg-blue-500 rounded-2xl p-6 relative overflow-hidden">
            <div className="bg-white rounded-lg px-4 py-2 mb-4 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-sm font-medium text-gray-800">SIMS</span>
                <span className="text-xs text-gray-500">HOSPITAL</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded px-2 py-1 text-xs text-gray-600">
              Batch 2024-2025
            </div>
            <div className="mt-auto pt-8">
              <h3 className="text-xl font-semibold text-white mb-1">Reetha</h3>
              <p className="text-blue-100 text-sm font-medium">Physiotherapist</p>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-t from-blue-600 to-transparent rounded-bl-full"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
            Placement Partners
          </h1>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            At SRM College Of Allied Health Sciences (AHS), We Are Committed To Shaping Healthcare 
            Professionals Who Are Career-Ready And Globally Competent. Our Strong Industry 
            Collaborations Open Up Excellent Career Pathways For Our Students Across Leading 
            Hospitals, Healthcare Organizations, And Research Institutions.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">104+</div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                Companies
              </div>
              <p className="text-gray-600 text-sm">2023-24 Campus Placement Drive</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">206+</div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                Placements
              </div>
              <p className="text-gray-600 text-sm">Offers Extended To Our Talented Graduates</p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="flex items-center justify-start gap-8">
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-gray-600 font-medium">SRM</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-gray-600 font-medium">SIMS</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <span className="text-gray-600 font-medium">Apollo</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 font-medium text-sm">SRM PRIME</span>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-start gap-8">
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 font-medium text-sm">SRM PRIME</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <span className="text-gray-600 font-medium">Apollo</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-gray-600 font-medium">SRM</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-gray-600 font-medium">SIMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartnersSection;