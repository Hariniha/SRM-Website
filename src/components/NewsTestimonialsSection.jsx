const NewsTestimonialsSection = () => {
  const newsItems = [
    {
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt"
    }
  ];

  const testimonials = [
    {
      name: "Saranya Mohan",
      program: "B.Sc Cardiac Care Technology",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.",
      studentName: "Swetha",
      studentProgram: "B.Sc Cardiac Care Technology"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Latest News */}
          <div>
            {/* Latest News Header */}
            <div className="bg-yellow-300 rounded-2xl px-8 py-6 mb-8">
              <h2 className="text-3xl font-bold text-black">Latest News</h2>
            </div>

            {/* News Items */}
            <div className="bg-yellow-50 rounded-2xl p-8 space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="border-b border-yellow-200 pb-6 last:border-b-0 last:pb-0">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {item.title}
                  </p>
                  <button className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200">
                    Read More
                    <svg className="ml-2 w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Student Testimonials */}
          <div>
            {/* Student Testimonials Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-900">Student Testimonials</h2>
                
                {/* Navigation Arrows */}
                <div className="flex items-center space-x-3">
                  <button className="w-12 h-12 bg-yellow-300 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-6">
              {/* Student Images with Names */}
              <div className="space-y-4">
                {/* First Student Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center px-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold">Saranya Mohan</h3>
                      <p className="text-gray-300">B.Sc Cardiac Care Technology</p>
                    </div>
                  </div>
                </div>

                {/* Main Student Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Student"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Second Student Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center px-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold">Saranya Mohan</h3>
                      <p className="text-gray-300">B.Sc Cardiac Care Technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {testimonials[0].testimonial}
                </p>
                
                <div>
                  <h4 className="text-2xl font-bold text-blue-500 mb-1">
                    {testimonials[0].studentName}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {testimonials[0].studentProgram}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsTestimonialsSection;