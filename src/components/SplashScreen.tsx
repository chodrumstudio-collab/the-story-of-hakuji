import { Snowflakes } from './Snowflakes';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <Snowflakes count={40} />
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        {/* Compass Pattern */}
        <div className="relative w-64 h-64 mb-8">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full opacity-30 animate-pulse"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255, 25, 118, 0.5))' }}
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FF1976"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="#FF1976"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="#FF1976"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Compass points */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
                stroke="#FF1976"
                strokeWidth={angle % 90 === 0 ? '2' : '1'}
                opacity={angle % 90 === 0 ? '0.8' : '0.4'}
              />
            ))}
            {/* Center pattern */}
            <polygon
              points="100,80 110,100 100,120 90,100"
              fill="#FF1976"
              opacity="0.5"
            />
          </svg>
        </div>
        
        {/* Korean Text */}
        <p className="text-white text-center px-8 tracking-wide mb-8" style={{ fontSize: '20px' }}>
          한 남자의 사랑과 상실의 이야기
        </p>

        {/* Enter Text Button */}
        <button
          onClick={onComplete}
          className="text-white transition-all hover:text-gray-300 active:scale-95 cursor-pointer animate-fade-in-delayed"
          style={{ 
            fontSize: '16px',
            background: 'none',
            border: 'none',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          입장하기
        </button>
      </div>
      
    </div>
  );
}
