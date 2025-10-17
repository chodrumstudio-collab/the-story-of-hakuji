import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: 'q1e9rZ-QHak',
    title: '아카자 관련 영상 #1',
    embedUrl: 'https://www.youtube.com/embed/q1e9rZ-QHak'
  },
  {
    id: 'TICRYiJu9bA', 
    title: '아카자 관련 영상 #2',
    embedUrl: 'https://www.youtube.com/embed/TICRYiJu9bA'
  },
  {
    id: 'b4ahreRCBFI',
    title: '아카자 관련 영상 #3', 
    embedUrl: 'https://www.youtube.com/embed/b4ahreRCBFI'
  },
  {
    id: '-ZKhYxP1nlM',
    title: '아카자 관련 영상 #4',
    embedUrl: 'https://www.youtube.com/embed/-ZKhYxP1nlM'
  },
  {
    id: 'k_8UE2gDdYU',
    title: '아카자 관련 영상 #5',
    embedUrl: 'https://www.youtube.com/embed/k_8UE2gDdYU'
  }
];

export function VideoList() {
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
        {videos.map((video, index) => (
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

            {/* YouTube Video */}
            <div className="mx-4 mb-4">
              <div 
                className="relative rounded-2xl overflow-hidden"
                style={{
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  height: 0,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
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
        ))}
      </div>
    </div>
  );
}
