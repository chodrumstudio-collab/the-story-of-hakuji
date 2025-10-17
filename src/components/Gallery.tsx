import { ImageWithFallback } from './figma/ImageWithFallback';
import { Filter } from 'lucide-react';

const quotes = [
  {
    id: 1,
    text: '코유키... 약속했잖아...',
    image: 'https://images.unsplash.com/photo-1621239793038-49f40616733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwc3Vuc2V0fGVufDF8fHx8MTc2MDcxMTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 18',
    featured: true,
  },
  {
    id: 2,
    text: '난 약자를 먹지 않아',
    image: 'https://images.unsplash.com/photo-1599677100568-a367e56ca161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGZpZ2h0aW5nfGVufDF8fHx8MTc2MDcxMTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 12',
  },
  {
    id: 3,
    text: '더 강해져라, 교쥬로',
    image: 'https://images.unsplash.com/photo-1599677100568-a367e56ca161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGZpZ2h0aW5nfGVufDF8fHx8MTc2MDcxMTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 12',
  },
  {
    id: 4,
    text: '내가... 지키고 싶었던 것',
    image: 'https://images.unsplash.com/photo-1557655526-c97079fca862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHdvbWFuJTIwa2ltb25vJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNzExNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 18',
  },
  {
    id: 5,
    text: '사부님... 코유키...',
    image: 'https://images.unsplash.com/photo-1671538856590-564ae61456dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwd2ludGVyJTIwZGFya3xlbnwxfHx8fDE3NjA3MTE1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 18',
  },
  {
    id: 6,
    text: '불꽃놀이가 보고 싶다',
    image: 'https://images.unsplash.com/photo-1621239793038-49f40616733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwc3Vuc2V0fGVufDF8fHx8MTc2MDcxMTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    episode: 'EP. 18',
  },
];

export function Gallery() {
  const featuredQuote = quotes.find(q => q.featured);
  const regularQuotes = quotes.filter(q => !q.featured);

  return (
    <div 
      className="min-h-screen pb-24"
      style={{ background: '#0A0E27' }}
    >
      {/* Header */}
      <div className="sticky top-0 z-20 px-6 py-5 flex items-center justify-between"
        style={{ background: 'rgba(10, 14, 39, 0.95)', backdropFilter: 'blur(10px)' }}
      >
        <h1 className="text-white" style={{ fontSize: '24px' }}>명장면 & 명대사</h1>
        <button className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
          <Filter size={20} color="white" />
        </button>
      </div>

      <div className="px-6 pt-6">
        {/* Featured Quote */}
        {featuredQuote && (
          <div 
            className="relative rounded-3xl overflow-hidden mb-8"
            style={{ 
              height: '400px',
              boxShadow: '0 8px 32px rgba(255, 25, 118, 0.3)',
            }}
          >
            <ImageWithFallback
              src={featuredQuote.image}
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
              }}
            >
              {/* Large quotation marks */}
              <div className="text-6xl mb-4" style={{ color: '#FF1976' }}>"</div>
              
              <p className="text-white text-center mb-4" style={{ fontSize: '20px' }}>
                {featuredQuote.text}
              </p>
              
              <div 
                className="px-4 py-1 rounded-full text-white text-sm"
                style={{ background: 'rgba(255, 25, 118, 0.8)' }}
              >
                {featuredQuote.episode}
              </div>
            </div>
            
            {/* Glowing border */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: '2px solid rgba(255, 25, 118, 0.5)',
                boxShadow: 'inset 0 0 20px rgba(255, 25, 118, 0.2)',
              }}
            />
          </div>
        )}

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 gap-4">
          {regularQuotes.map((quote, index) => (
            <div
              key={quote.id}
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: index % 3 === 0 ? '240px' : '200px',
              }}
            >
              <ImageWithFallback
                src={quote.image}
                alt={`Quote ${quote.id}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                }}
              >
                <p className="text-white mb-2" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                  {quote.text}
                </p>
                <div 
                  className="px-3 py-1 rounded-full text-white self-start"
                  style={{ fontSize: '10px', background: 'rgba(255, 25, 118, 0.8)' }}
                >
                  {quote.episode}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
