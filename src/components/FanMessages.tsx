import { Heart, Plus } from 'lucide-react';
import { Snowflakes } from './Snowflakes';

const messages = [
  {
    id: 1,
    username: '불꽃놀이처럼',
    date: '2024.10.15',
    avatar: '🌸',
    message: '하쿠지, 당신의 사랑은 영원히 기억될 거예요. 코유키와의 약속, 잊지 않을게요.',
    likes: 234,
  },
  {
    id: 2,
    username: '눈송이',
    date: '2024.10.14',
    avatar: '❄️',
    message: '가장 슬픈 악마. 당신은 결코 악이 아니었어요. 사랑하는 사람을 지키고 싶었던 한 남자였을 뿐.',
    likes: 189,
  },
  {
    id: 3,
    username: '분홍나비',
    date: '2024.10.14',
    avatar: '🦋',
    message: '아카자가 마지막에 기억을 되찾는 장면에서 너무 울었어요. 코유키와 다시 만났길 바라요.',
    likes: 456,
  },
  {
    id: 4,
    username: '달빛아래',
    date: '2024.10.13',
    avatar: '🌙',
    message: '하쿠지... 당신의 이야기는 가장 아름답고 슬픈 사랑 이야기예요. 영원히 기억할게요.',
    likes: 312,
  },
  {
    id: 5,
    username: '겨울바람',
    date: '2024.10.12',
    avatar: '🍃',
    message: '악마가 되어서도 약자를 먹지 않았던 것은 코유키와의 약속을 무의식적으로 지킨 거겠죠. 너무 슬퍼요.',
    likes: 521,
  },
];

export function FanMessages() {
  return (
    <div 
      className="relative min-h-screen pb-32"
      style={{ background: '#0A0E27' }}
    >
      <Snowflakes count={20} />
      
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <h1 className="text-white text-center mb-3" style={{ fontSize: '24px' }}>
          하쿠지에게 전하는 메시지
        </h1>
        <p className="text-gray-400 text-center text-sm">
          당신의 이야기를 기억하는 사람들
        </p>
      </div>

      {/* Message Cards */}
      <div className="px-6 space-y-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="rounded-2xl p-5"
            style={{
              background: 'rgba(26, 31, 58, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* User Info */}
            <div className="flex items-center mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ 
                  background: 'linear-gradient(135deg, #FF1976, #E91E63)',
                  fontSize: '20px',
                }}
              >
                {msg.avatar}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">{msg.username}</p>
                <p className="text-gray-500 text-xs">{msg.date}</p>
              </div>
            </div>

            {/* Message */}
            <p 
              className="mb-4"
              style={{ 
                fontSize: '14px', 
                color: '#E0E0E0',
                lineHeight: '1.7',
              }}
            >
              {msg.message}
            </p>

            {/* Like */}
            <div className="flex items-center justify-end">
              <Heart size={14} fill="#FF1976" color="#FF1976" className="mr-1" />
              <span className="text-xs" style={{ color: '#FF1976' }}>{msg.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Message Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-20"
        style={{
          background: 'linear-gradient(to top, rgba(10, 14, 39, 0.98), transparent)',
        }}
      >
        <button
          className="w-full rounded-full text-white flex items-center justify-center gap-2 transition-transform hover:scale-105"
          style={{
            height: '48px',
            background: 'linear-gradient(135deg, #FF1976, #E91E63)',
            boxShadow: '0 4px 20px rgba(255, 25, 118, 0.4)',
          }}
        >
          <Plus size={20} />
          <span>메시지 남기기</span>
        </button>
      </div>
    </div>
  );
}
