const DNAHelix = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-0">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="opacity-20 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* DNA Double Helix Structure */}
        <g>
          {/* Left Strand - Curved path */}
          <path
            d="M100 50 Q250 100 100 150 Q250 200 100 250 Q250 300 100 350"
            stroke="#7dd3fc"
            strokeWidth="8"
            fill="none"
            className="opacity-60"
          />
          
          {/* Right Strand - Curved path */}
          <path
            d="M300 50 Q150 100 300 150 Q150 200 300 250 Q150 300 300 350"
            stroke="#38bdf8"
            strokeWidth="8"
            fill="none"
            className="opacity-60"
          />
          
          {/* Base Pairs - Connecting lines */}
          {Array.from({ length: 15 }, (_, i) => {
            const y = 60 + i * 20;
            const phase = (i * Math.PI) / 7.5;
            const leftX = 100 + Math.sin(phase) * 100;
            const rightX = 300 - Math.sin(phase) * 100;
            
            return (
              <g key={i}>
                <line
                  x1={leftX}
                  y1={y}
                  x2={rightX}
                  y2={y}
                  stroke="#7dd3fc"
                  strokeWidth="4"
                  className="opacity-40"
                />
                <circle
                  cx={leftX}
                  cy={y}
                  r="6"
                  fill="#7dd3fc"
                  className="opacity-60"
                />
                <circle
                  cx={rightX}
                  cy={y}
                  r="6"
                  fill="#38bdf8"
                  className="opacity-60"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default DNAHelix;