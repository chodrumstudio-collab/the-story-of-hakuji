import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, X } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  relationship: string;
  image: string;
  description: string;
  color: string;
}

const people: Person[] = [
  {
    id: 'father',
    name: '아버지',
    relationship: '아버지',
    image: '/img/관계도/하쿠지 아버지/G0kJJNZbsAAL767.jpg',
    description: '병든 아버지를 위해 범죄의 길로 들어선 하쿠지. 아버지에 대한 사랑이 모든 이야기의 시작이었다.',
    color: '#FFB300',
  },
  {
    id: 'keizo',
    name: '케이조 사부님',
    relationship: '케이조 사부님',
    image: '/img/관계도/케이조 사부님/JBblGz1UE00gM1jrRGwOlTyAns3urJVaQeY5N8PfkC7LT-J0bLaJVlPqjG9FEwCdGIdJgEHcFlY-mG_B91k92Q.webp',
    description: '하쿠지에게 새로운 삶의 기회를 준 도장의 사부. 그를 제자이자 가족으로 받아들였다.',
    color: '#FFB300',
  },
  {
    id: 'koyuki',
    name: '코유키',
    relationship: '코유키',
    image: '/img/관계도/코유키/images.jpeg',
    description: '하쿠지의 영원한 사랑. 그녀와의 약속이 하쿠지를 인간으로 만들었고, 그녀의 죽음이 악마를 탄생시켰다.',
    color: '#FF6B6B',
  },
  {
    id: 'muzan',
    name: '무잔',
    relationship: '무잔',
    image: '/img/관계도/무잔/53886d4a-4dee-4b7c-ba3b-05fb4fc62c0f.webp',
    description: '절망에 빠진 하쿠지를 악마로 만든 귀의 시조. 그에게 힘을 주었지만 모든 기억을 앗아갔다.',
    color: '#FF1976',
  },
];

export function RelationshipDiagram() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div 
      className="relative min-h-screen"
      style={{
        background: '#1A1F3A',
      }}
    >
      {/* Compass pattern background */}
      <svg 
        viewBox="0 0 400 400" 
        className="absolute inset-0 w-full h-full opacity-5"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="white" strokeWidth="1" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 150 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 150 * Math.sin((angle * Math.PI) / 180)}
            stroke="white"
            strokeWidth={angle % 90 === 0 ? '2' : '1'}
          />
        ))}
      </svg>

      {/* Center - Hakuji */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div 
          className="rounded-full overflow-hidden border-4 border-white shadow-2xl"
          style={{ 
            width: '100px', 
            height: '100px',
            boxShadow: '0 0 30px rgba(255, 25, 118, 0.5)',
          }}
        >
          <ImageWithFallback
            src="/img/관계도/하쿠지/8e81f06a-1ef8-43e2-a7c9-22eb188adb51.webp"
            alt="Hakuji"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-white text-center mt-2">하쿠지</p>
      </div>

      {/* Father - Top */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <svg className="absolute top-20 left-1/2 transform -translate-x-1/2" width="2" height="80" style={{ zIndex: 0 }}>
          <line x1="1" y1="0" x2="1" y2="80" stroke="#FFB300" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <div 
          onClick={() => setSelectedPerson(people[0])}
          className="cursor-pointer"
        >
          <div 
            className="rounded-full overflow-hidden border-3 border-white shadow-lg"
            style={{ 
              width: '80px', 
              height: '80px',
              boxShadow: `0 0 20px ${people[0].color}`,
            }}
          >
            <ImageWithFallback
              src={people[0].image}
              alt={people[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-center mt-1 text-sm">{people[0].name}</p>
        </div>
      </div>

      {/* Keizo - Left */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <svg className="absolute top-1/2 left-20 transform -translate-y-1/2" width="100" height="2" style={{ zIndex: 0 }}>
          <line x1="0" y1="1" x2="100" y2="1" stroke="#FFB300" strokeWidth="2" />
        </svg>
        <div 
          onClick={() => setSelectedPerson(people[1])}
          className="cursor-pointer"
        >
          <div 
            className="rounded-full overflow-hidden border-3 border-white shadow-lg"
            style={{ 
              width: '80px', 
              height: '80px',
              boxShadow: `0 0 20px ${people[1].color}`,
            }}
          >
            <ImageWithFallback
              src={people[1].image}
              alt={people[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-center mt-1 text-sm">{people[1].name}</p>
        </div>
      </div>

      {/* Koyuki - Right */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <svg className="absolute top-1/2 right-20 transform -translate-y-1/2" width="100" height="2" style={{ zIndex: 0 }}>
          <line x1="0" y1="1" x2="100" y2="1" stroke="#FF6B6B" strokeWidth="2" />
          <Heart 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            size={16} 
            fill="#FF6B6B" 
            color="#FF6B6B" 
          />
        </svg>
        <div 
          onClick={() => setSelectedPerson(people[2])}
          className="cursor-pointer"
        >
          <div 
            className="rounded-full overflow-hidden border-3 border-white shadow-lg"
            style={{ 
              width: '80px', 
              height: '80px',
              boxShadow: `0 0 20px ${people[2].color}`,
            }}
          >
            <ImageWithFallback
              src={people[2].image}
              alt={people[2].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-center mt-1 text-sm">{people[2].name}</p>
        </div>
      </div>

      {/* Muzan - Bottom */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
        <svg className="absolute bottom-16 left-1/2 transform -translate-x-1/2" width="2" height="100" style={{ zIndex: 0 }}>
          <line x1="1" y1="0" x2="1" y2="100" stroke="#FF1976" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <div 
          onClick={() => setSelectedPerson(people[3])}
          className="cursor-pointer"
        >
          <div 
            className="rounded-full overflow-hidden border-3 border-white shadow-lg"
            style={{ 
              width: '60px', 
              height: '60px',
              boxShadow: `0 0 20px ${people[3].color}`,
            }}
          >
            <ImageWithFallback
              src={people[3].image}
              alt={people[3].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-center mt-1 text-sm">{people[3].name}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center gap-4 text-xs text-white">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-yellow-500" />
              <span>가족/스승</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-red-400" />
              <span>사랑</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-red-600" style={{ backgroundImage: 'linear-gradient(to right, #FF1976 50%, transparent 50%)', backgroundSize: '8px 2px' }} />
              <span>저주</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card Modal */}
      {selectedPerson && (
        <div 
          className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedPerson(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <X size={16} />
            </button>
            
            <div className="flex flex-col items-center mb-6">
              <div 
                className="rounded-full overflow-hidden border-4 mb-4"
                style={{ 
                  width: '100px', 
                  height: '100px',
                  borderColor: selectedPerson.color,
                }}
              >
                <ImageWithFallback
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-1" style={{ color: selectedPerson.color }}>
                {selectedPerson.name}
              </h3>
              <p className="text-gray-500 text-sm">{selectedPerson.relationship}</p>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed" style={{ lineHeight: '1.7' }}>
              {selectedPerson.description}
            </p>
          </div>
        </div>
      )}

      {/* Title */}
      <div className="absolute top-8 left-6 right-6 z-10">
        <h2 className="text-white text-center mb-2" style={{ fontSize: '24px' }}>관계도</h2>
        <p className="text-gray-400 text-center text-sm">원을 탭하여 자세히 보기</p>
      </div>
    </div>
  );
}
