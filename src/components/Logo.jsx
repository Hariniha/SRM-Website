const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/cmc-logo-1.webp"
        alt="SRM Logo"
        className="w-12 h-12 object-contain rounded-full shadow-md bg-white"
      />
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-sm font-bold text-gray-700 tracking-wide">SRM</span>
          <span className="text-xs text-blue-600 font-semibold">TRICHY</span>
        </div>
        <span className="text-xs text-gray-600 font-medium leading-tight">MEDICAL COLLEGE</span>
        <span className="text-xs text-gray-500 leading-tight">DENTAL & NURSING COLLEGE</span>
      </div>
    </div>
  );
};

export default Logo;