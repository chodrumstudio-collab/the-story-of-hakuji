import { Snowflakes } from './Snowflakes';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <Snowflakes count={40} />
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        {/* Snowflake Image */}
        <div className="relative w-64 h-64 mb-8">
          <ImageWithFallback
            src="/img/snowflake-splash.png"
            alt="Snowflake"
            className="w-full h-full object-contain opacity-80 animate-pulse"
            style={{ filter: 'drop-shadow(0 0 30px rgba(200, 230, 255, 0.8))' }}
          />
        </div>
        
        {/* Korean Text */}
        <p className="text-white text-center px-8 tracking-wide mb-12" style={{ fontSize: '20px' }}>
          한 남자의 사랑과 상실의 이야기
        </p>

        {/* Enter Button */}
        <button
          onClick={onComplete}
          className="px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 animate-bounce-slow"
          style={{
            background: 'linear-gradient(135deg, #FF1976, #E91E63)',
            boxShadow: '0 8px 32px rgba(255, 25, 118, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          입장하기
        </button>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
