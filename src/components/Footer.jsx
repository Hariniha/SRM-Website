const Footer = () => {
  return (
    <footer className="bg-[#1CA5FD] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description Column */}
          <div className="lg:col-span-1">
            {/* Logo Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 inline-block">
              <img
                src="/cmc-logo-1.webp"
                alt="SRM Logo"
                className="w-20 h-12 sm:w-24 sm:h-16 object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-blue-100 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut
            </p>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Follow Us</h3>
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Link Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8">Quick Link</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Placements
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Academics
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Academics Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8">Academics</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Bachelor of Physiotherapy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Master of Physiotherapy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Bachelor of Occupational Therapy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Master of Occupational Therapy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">
                  Master of Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8">Contact Us</h3>
            <div className="space-y-4 sm:space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                  Trichy SRM Medical College Hospital & Research Center, SRM Nagar, Trichy – Chennai Highway, Irungalur Village, Tiruchirapalli – 621105 Tamil Nadu, India.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href="mailto:srmahs@gmail.com" className="text-blue-100 hover:text-white transition-colors text-base sm:text-lg">
                  srmahs@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href="tel:000-000-000" className="text-blue-100 hover:text-white transition-colors text-base sm:text-lg">
                  000-000-000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;