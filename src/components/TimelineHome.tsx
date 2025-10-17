import { Heart, Flame, HeartCrack, Skull, Snowflake, User, Sparkles, Play } from 'lucide-react';

interface TimelineHomeProps {
  onChapterSelect: (chapter: number) => void;
}

const chapters = [
  {
    id: 1,
    number: '01',
    title: '하쿠지 - 범죄자였던 소년',
    description: '가난과 절망 속에서 살아가던 한 소년의 이야기',
    icon: User,
  },
  {
    id: 2,
    number: '02',
    title: '구원 - 케이조와의 만남',
    description: '무술 도장의 사부님이 준 두 번째 기회',
    icon: Sparkles,
  },
  {
    id: 3,
    number: '03',
    title: '사랑 - 코유키와의 약속',
    description: '불꽃놀이처럼 아름답고 순수했던 첫사랑',
    icon: Heart,
  },
  {
    id: 4,
    number: '04',
    title: '비극 - 돌이킬 수 없는 날',
    description: '모든 것이 무너진 운명의 그날',
    icon: HeartCrack,
  },
  {
    id: 5,
    number: '05',
    title: '복수와 절망',
    description: '분노와 슬픔으로 물든 피의 밤',
    icon: Flame,
  },
  {
    id: 6,
    number: '06',
    title: '아카자의 탄생',
    description: '인간성을 잃고 악마가 된 순간',
    icon: Skull,
  },
  {
    id: 7,
    number: '07',
    title: '잊혀진 기억',
    description: '눈 속에 묻힌 그녀의 이름',
    icon: Snowflake,
  },
];

export function TimelineHome({ onChapterSelect }: TimelineHomeProps) {
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
        <h1 className="text-white text-center" style={{ fontSize: '28px' }}>The Story of Hakuji</h1>
      </div>

      <div className="px-6 pt-6 space-y-5">
        {/* Featured Video Section */}
        <div
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
                아카자 관련 영상 #1
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
                src="https://www.youtube.com/embed/q1e9rZ-QHak"
                title="아카자 관련 영상 #1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Video Indicator */}
          <div 
            className="absolute top-4 right-4" 
            style={{ 
              fontSize: '36px', 
              color: '#FF1976', 
              opacity: 0.2, 
              lineHeight: 1,
              fontWeight: 'bold' 
            }}
          >
            VIDEO
          </div>
        </div>

        {/* Timeline Cards */}
        {chapters.map((chapter, index) => {
          const Icon = chapter.icon;
          return (
            <div
              key={chapter.id}
              onClick={() => onChapterSelect(chapter.id)}
              className="relative rounded-3xl p-6 cursor-pointer transition-all hover:scale-105"
              style={{
                width: '345px',
                height: '180px',
                background: 'rgba(26, 31, 58, 0.8)',
                boxShadow: '0px 4px 20px rgba(255, 25, 118, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Chapter Number */}
              <div 
                className="absolute top-4 left-6" 
                style={{ fontSize: '60px', color: '#FF1976', opacity: 0.3, lineHeight: 1 }}
              >
                {chapter.number}
              </div>

              {/* Icon */}
              <div className="absolute top-6 right-6">
                <Icon size={32} color="#FF1976" opacity={0.6} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-white mb-2" style={{ fontSize: '20px' }}>
                  {chapter.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9E9E9E' }}>
                  {chapter.description}
                </p>
              </div>

              {/* Snowflake decoration */}
              <div className="absolute bottom-4 right-6 opacity-10">
                <Snowflake size={48} color="#FFFFFF" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
