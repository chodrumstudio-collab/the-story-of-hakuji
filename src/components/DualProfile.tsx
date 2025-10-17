import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DualProfile() {
  const [activeView, setActiveView] = useState<'split' | 'hakuji' | 'akaza'>('split');

  return (
    <div className="relative min-h-screen">
      {activeView === 'split' && (
        <div className="flex h-full">
          {/* LEFT - Hakuji */}
          <div 
            className="w-1/2 relative flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFB300, #FF6B6B)',
            }}
          >
            {/* Sakura decorations */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: '24px',
                  }}
                >
                  ✿
                </div>
              ))}
            </div>

            <div 
              className="relative rounded-full overflow-hidden border-4 border-white shadow-lg z-10"
              style={{ width: '120px', height: '120px' }}
              onClick={() => setActiveView('hakuji')}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754474419533-7e2eb0e6fa60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hbiUyMHNhbXVyYWklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3MTE1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hakuji"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-white mt-4 mb-6" style={{ fontSize: '28px' }}>하쿠지</h2>

            {/* Stats */}
            <div className="w-32 space-y-3">
              <div>
                <p className="text-white text-xs mb-1">인간성</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">희망</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">사랑</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '95%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Center divider - broken effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 z-20"
            style={{
              background: 'linear-gradient(to bottom, #FFFFFF 0%, transparent 10%, transparent 20%, #FFFFFF 25%, transparent 30%, transparent 40%, #FFFFFF 45%, transparent 50%, transparent 60%, #FFFFFF 65%, transparent 70%, transparent 80%, #FFFFFF 85%, transparent 90%, transparent 100%)',
              transform: 'translateX(-50%)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
            }}
          />

          {/* RIGHT - Akaza */}
          <div 
            className="w-1/2 relative flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #C2185B, #FF1976)',
            }}
          >
            {/* Compass pattern decorations */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <svg viewBox="0 0 200 200" className="absolute w-32 h-32" style={{ top: '10%', left: '10%' }}>
                <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="2" />
                <line x1="100" y1="50" x2="100" y2="150" stroke="white" strokeWidth="2" />
                <line x1="50" y1="100" x2="150" y2="100" stroke="white" strokeWidth="2" />
              </svg>
              <svg viewBox="0 0 200 200" className="absolute w-24 h-24" style={{ bottom: '20%', right: '15%' }}>
                <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2" />
                <line x1="100" y1="60" x2="100" y2="140" stroke="white" strokeWidth="2" />
                <line x1="60" y1="100" x2="140" y2="100" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div 
              className="relative rounded-full overflow-hidden border-4 border-white shadow-lg z-10"
              style={{ width: '120px', height: '120px' }}
              onClick={() => setActiveView('akaza')}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599677100568-a367e56ca161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGZpZ2h0aW5nfGVufDF8fHx8MTc2MDcxMTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Akaza"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-white mt-4 mb-6" style={{ fontSize: '28px' }}>아카자</h2>

            {/* Stats */}
            <div className="w-32 space-y-3">
              <div>
                <p className="text-white text-xs mb-1">파괴력</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">분노</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">상실</p>
                <div className="h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'hakuji' && (
        <div 
          className="h-full flex flex-col items-center justify-center p-8"
          style={{ background: 'linear-gradient(135deg, #FFB300, #FF6B6B)' }}
          onClick={() => setActiveView('split')}
        >
          <div className="rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6"
            style={{ width: '180px', height: '180px' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754474419533-7e2eb0e6fa60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hbiUyMHNhbXVyYWklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3MTE1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hakuji"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: '36px' }}>하쿠지</h2>
          <p className="text-white text-center mb-8 opacity-90" style={{ fontSize: '16px' }}>
            인간이었던 시절<br />순수하고 사랑이 가득했던 영혼
          </p>
          <div className="w-48 space-y-4">
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>인간성</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>희망</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>사랑</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '95%' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'akaza' && (
        <div 
          className="h-full flex flex-col items-center justify-center p-8"
          style={{ background: 'linear-gradient(135deg, #C2185B, #FF1976)' }}
          onClick={() => setActiveView('split')}
        >
          <div className="rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6"
            style={{ width: '180px', height: '180px' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599677100568-a367e56ca161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGZpZ2h0aW5nfGVufDF8fHx8MTc2MDcxMTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Akaza"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: '36px' }}>아카자</h2>
          <p className="text-white text-center mb-8 opacity-90" style={{ fontSize: '16px' }}>
            악마가 된 전사<br />잃어버린 기억 속의 약속
          </p>
          <div className="w-48 space-y-4">
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>파괴력</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>분노</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <p className="text-white mb-2" style={{ fontSize: '14px' }}>상실</p>
              <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle indicator */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-white text-xs">탭하여 전환</p>
        </div>
      </div>
    </div>
  );
}
