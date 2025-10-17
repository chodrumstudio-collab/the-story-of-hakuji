import { Clock, Users, MessageCircle, Play } from 'lucide-react';

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'timeline', icon: Clock, label: '타임라인' },
    { id: 'relationships', icon: Users, label: '관계도' },
    { id: 'videos', icon: Play, label: '동영상' },
    { id: 'messages', icon: MessageCircle, label: '메시지' },
  ];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-20 z-30"
      style={{
        background: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="flex items-center justify-around h-full px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-1 transition-all"
            >
              <div
                className="transition-all"
                style={{
                  color: isActive ? '#FF1976' : '#9E9E9E',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <Icon size={24} />
              </div>
              <span
                className="text-xs"
                style={{
                  color: isActive ? '#FF1976' : '#9E9E9E',
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <div
                  className="absolute -bottom-1 h-0.5 rounded-full"
                  style={{
                    width: '32px',
                    background: '#FF1976',
                    boxShadow: '0 0 8px #FF1976',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
