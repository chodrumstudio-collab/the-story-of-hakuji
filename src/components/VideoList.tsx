import { Play, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: 'q1e9rZ-QHak',
    title: '하쿠지 관련 영상 #1',
    embedUrl: 'https://www.youtube.com/embed/q1e9rZ-QHak'
  },
  {
    id: 'TICRYiJu9bA', 
    title: '하쿠지 관련 영상 #2',
    embedUrl: 'https://www.youtube.com/embed/TICRYiJu9bA'
  },
  {
    id: 'b4ahreRCBFI',
    title: '하쿠지 관련 영상 #3', 
    embedUrl: 'https://www.youtube.com/embed/b4ahreRCBFI'
  },
  {
    id: '-ZKhYxP1nlM',
    title: '하쿠지 관련 영상 #4',
    embedUrl: 'https://www.youtube.com/embed/-ZKhYxP1nlM'
  },
  {
    id: 'DiTQ7J-4ZAg',
    title: '하쿠지 관련 영상 #5',
    embedUrl: 'https://www.youtube.com/embed/DiTQ7J-4ZAg'
  }
];

export function VideoList() {
  const [videoErrors, setVideoErrors] = useState<Set<string>>(new Set());

  const handleVideoError = (videoId: string) => {
    setVideoErrors(prev => new Set(prev).add(videoId));
  };

  return (
    <div 
      className="min-h-screen pb-24 pt-20"
      style={{
        background: 'linear-gradient(to bottom, #2D1B3D, #0A0E27)',
      }}
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center z-20"
        style={{ background: 'rgba(10, 14, 39, 0.95)' }}
      >
        <h1 className="text-white text-center" style={{ fontSize: '28px' }}>동영상</h1>
      </div>

      {/* Video List */}
      <div className="px-6 pt-6 space-y-6">
        {videos.map((video, index) => {
          const hasError = videoErrors.has(video.id);
          
          return (
            <div
              key={video.id}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(26, 31, 58, 0.8)',
                boxShadow: '0px 4px 20px rgba(255, 25, 118, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Video Title */}
              <div className="p-4 pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <Play size={20} color="#FF1976" />
                  <h3 className="text-white" style={{ fontSize: '18px' }}>
                    {video.title}
                  </h3>
                </div>
              </div>

              {/* YouTube Video or Error Message */}
              <div className="mx-4 mb-4">
                <div 
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                    height: 0,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {hasError ? (
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white">
                      <AlertCircle size={48} color="#FF1976" className="mb-4" />
                      <p className="text-center text-sm px-4">
                        영상을 불러올 수 없습니다
                      </p>
                      <p className="text-center text-xs text-gray-400 mt-2 px-4">
                        영상이 삭제되었거나 비공개로 설정되었을 수 있습니다
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      onError={() => handleVideoError(video.id)}
                    />
                  )}
                </div>
              </div>

              {/* Video Number Indicator */}
              <div 
                className="absolute top-4 right-4" 
                style={{ 
                  fontSize: '48px', 
                  color: '#FF1976', 
                  opacity: 0.2, 
                  lineHeight: 1,
                  fontWeight: 'bold' 
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
