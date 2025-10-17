import { ArrowLeft, Snowflake, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryDetailProps {
  chapterId: number;
  onBack: () => void;
  onNext: () => void;
}

const storyContent: Record<number, {
  title: string;
  content: string;
  quote: string;
  images: string[];
  source: string;
  sourceUrl: string;
}> = {
  1: {
    title: 'Ch.1 하쿠지 - 범죄자였던 소년',
    content: `에도 시대, 하쿠지는 병든 아버지와 함께 극심한 가난 속에서 살아가고 있었다. 아버지의 약값을 마련하기 위해 그는 절도와 소매치기를 일삼았다.

하지만 그의 아버지는 아들이 범죄를 저지르는 것을 견딜 수 없었다. 결국 아버지는 "이런 식으로 살 바에야 차라리..."라며 스스로 목숨을 끊었다. 

혼자 남겨진 하쿠지는 절망과 죄책감에 시달렸다. 그는 자신의 문신(罪人, 죄인)을 보며 범죄자로서의 낙인을 평생 짊어지게 되었다.`,
    quote: '아버지... 미안해요. 제가 범죄자가 아니었다면...',
    images: ['/img/ch1-hakuji/8e81f06a-1ef8-43e2-a7c9-22eb188adb51.webp'],
    source: '鬼滅の刃 (Demon Slayer) - 하쿠지 과거편',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Hakuji',
  },
  2: {
    title: 'Ch.2 구원 - 케이조와의 만남',
    content: `거리에서 다른 무술 도장과 싸움을 벌이던 하쿠지. 그때 케이조라는 노인이 그를 발견했다.

케이조는 소류 무술 도장의 사범으로, 하쿠지의 눈 속에서 무언가를 보았다. "네 아버지를 위해 싸웠구나. 나에게 와라. 내 딸을 간호하는 대신 너에게 무술을 가르쳐주마."

케이조는 하쿠지에게 새로운 삶의 기회를 주었다. 처음으로 하쿠지는 진정으로 자신을 믿어주는 사람을 만났다. 도장에서 수련하며, 하쿠지는 서서히 인간다운 삶을 되찾기 시작했다.`,
    quote: '사부님... 저 같은 인간에게 이런 기회를 주시다니',
    images: [
      '/img/ch2-keizo/JBblGz1UE00gM1jrRGwOlTyAns3urJVaQeY5N8PfkC7LT-J0bLaJVlPqjG9FEwCdGIdJgEHcFlY-mG_B91k92Q.webp',
      '/img/ch2-keizo/다운로드.jpeg'
    ],
    source: '鬼滅の刃 (Demon Slayer) - 무한열차 편',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Keizo',
  },
  3: {
    title: 'Ch.3 사랑 - 코유키와의 약속',
    content: `케이조의 딸 코유키는 병약했지만 따뜻한 마음을 가진 소녀였다. 하쿠지는 매일 그녀를 간호하며 점차 그녀에게 끌리게 되었다.

코유키 역시 하쿠지의 진심을 알아보았다. 두 사람은 서로 사랑하게 되었고, 케이조의 허락을 받아 약혼했다.

"하쿠지, 내가 완전히 건강해지면 불꽃놀이에 함께 가요. 약속해요."

하쿠지는 그녀의 손을 잡으며 맹세했다. "약속할게. 반드시 너를 행복하게 해줄게. 평생 지킬게." 

그의 팔의 문신은 더 이상 죄인의 표식이 아니었다. 사랑하는 사람을 위해 강해지겠다는 다짐이었다.`,
    quote: '코유키, 너를 만나 난 처음으로 행복이 뭔지 알았어',
    images: ['/img/ch3-koyuki/oar2.jpg'],
    source: '鬼滅の刃 (Demon Slayer) - 상현 삼 과거',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Koyuki',
  },
  4: {
    title: 'Ch.4 비극 - 돌이킬 수 없는 날',
    content: `하쿠지가 아버지의 묘를 찾아갔던 그날, 경쟁 도장이 소류 도장을 습격했다.

그들은 우물에 독을 풀었다. 케이조와 코유키가 그 물을 마셨다. 하쿠지가 돌아왔을 때, 그가 본 것은 고통스럽게 죽어가는 두 사람이었다.

"코유키... 코유키! 아니야, 제발... 사부님!"

하쿠지는 절규했다. 그의 손에서 코유키가 숨을 거두었다. 지키겠다고 약속했던 사람들을, 그는 지키지 못했다.

그날 밤, 눈이 내렸다. 마치 하늘도 함께 울고 있는 것처럼.`,
    quote: '내가... 여기 있었어야 했는데... 지키지 못했어...',
    images: ['/img/ch4-tragedy/_OfIvLe30iR3a_aSnRs6VHb8QJO-p5XihhUpKsIZCMY2XZstqzA0btZfAe9SnFgV68t7y28jk8DdtmbBEp8aSw.webp'],
    source: '鬼滅の刃 18권 - 아카자 회상',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Akaza',
  },
  5: {
    title: 'Ch.5 복수와 절망',
    content: `맨손으로, 하쿠지는 경쟁 도장으로 향했다. 그의 눈은 이미 인간의 것이 아니었다.

67명. 그는 도장의 모든 사람을 맨손으로 죽였다. 피로 물든 그의 손은 떨리지 않았다. 분노와 슬픔이 그를 움직이게 했다.

하지만 복수를 끝낸 후, 하쿠지는 공허함만을 느꼈다. 아무도 돌아오지 않았다. 코유키도, 케이조 사부님도.

눈 내리는 밤, 피로 얼룩진 하쿠지는 무릎을 꿇었다. "코유키... 미안해. 약속... 지키지 못했어."`,
    quote: '다 죽였어... 하지만 네가 돌아오지 않아',
    images: ['/img/ch5-revenge/15843760862.jpg'],
    source: '鬼滅の刃 애니메이션 시즌 2',
    sourceUrl: 'https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba',
  },
  6: {
    title: 'Ch.6 아카자의 탄생',
    content: `절망에 빠진 하쿠지 앞에 무잔이 나타났다. 귀의 시조는 그에게 손을 내밀었다.

"강해지고 싶지 않나? 영원히 강해져서, 다시는 아무도 잃지 않도록."

무잔의 피를 받은 하쿠지는 귀가 되었다. 하지만 그 대가로 그는 모든 인간으로서의 기억을 잃었다.

코유키의 얼굴, 케이조의 목소리, 불꽃놀이의 약속. 모든 것이 사라졌다. 남은 것은 오직 강해지고자 하는 본능뿐.

이제 그는 하쿠지가 아니었다. 상현 삼, 아카자가 되었다.`,
    quote: '강해져야 해... 왜인지 모르겠지만... 반드시',
    images: [
      '/img/ch6-akaza/47635da3535f4cacd3ba5d1f2967e5b8.jpg',
      '/img/ch6-akaza/FK0-WMrALeZuZAUo7OqFs2EC_Gdy9KbC5bMn5D6YbPu5t9E10jG3z070pNkH1cTYcfJm-RSSjYpJ_WD_uRLBbg.webp',
      '/img/ch6-akaza/HyP9NrKRAqHSgz4D2U54jYy5pDfbr2u9PDOjcaRQm5pZ3un5Mx_VZQu97guhqQn391AZbfnoU5fvsoNwTz_KrA.webp',
      '/img/ch6-akaza/image-34f6bda4-5b04-40a5-ac42-3d4c9b1c7268.jpeg'
    ],
    source: '鬼滅の刃 - 무한성 편',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Upper_Rank_Three',
  },
  7: {
    title: 'Ch.7 잊혀진 기억',
    content: `탄지로와의 마지막 전투. 목이 잘린 순간, 아카자는 선택의 기로에 섰다.

재생할 것인가, 아니면...

그때 기억이 돌아왔다. 눈 내리는 밤, 그녀의 미소, 불꽃놀이의 약속. 코유키... 그녀의 이름을 기억해냈다.

"코유키... 미안해. 약속 지키지 못했어. 불꽃놀이... 함께 가지 못했어."

아카자는 스스로를 파괴하기로 선택했다. 귀로서가 아닌, 하쿠지로서 죽기 위해.

소멸하는 순간, 그는 코유키를 보았다. "늦었어... 하쿠지." 그녀가 미소 지으며 말했다. "이제 함께 가요."`,
    quote: '코유키... 기다려줘서 고마워. 이제 함께 갈게',
    images: [
      '/img/ch7-memory/09347be5b07ecc279a592d444d623fcc.jpg',
      '/img/ch7-memory/images (2).jpeg',
      '/img/ch7-memory/images.jpeg',
      '/img/ch7-memory/NpIzPB0Q6UmgezM331VU-ZwJJ6inCLVYhIrOlqelRPAA8EmS4gpUyist9_o3jn0nHurbPxoTSAza7HxHA4qTZQ.webp'
    ],
    source: '鬼滅の刃 18권 - 엔딩',
    sourceUrl: 'https://kimetsu-no-yaiba.fandom.com/wiki/Akaza',
  },
};

export function StoryDetail({ chapterId, onBack, onNext }: StoryDetailProps) {
  const story = storyContent[chapterId as keyof typeof storyContent] || storyContent[3];

  return (
    <div className="min-h-screen" style={{ background: '#0A0E27' }}>
      {/* Hero Section */}
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={story.images[0]}
          alt="Story background"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 14, 39, 0.3), rgba(10, 14, 39, 0.95))',
          }}
        />
        
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft size={20} color="black" />
        </button>

        {/* Title */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white" style={{ fontSize: '24px' }}>
            {story.title}
          </h1>
        </div>

        {/* Snowflake decorations */}
        <Snowflake className="absolute top-20 right-8 opacity-30" size={32} color="white" />
        <Snowflake className="absolute top-32 right-24 opacity-20" size={24} color="white" />
      </div>

      {/* Content Card */}
      <div className="px-6 mt-12 relative z-10 pb-6">
        <div className="bg-white rounded-3xl shadow-2xl" style={{ paddingTop: '32px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Story content */}
          <div className="mb-6">
            <p 
              className="text-justify whitespace-pre-line"
              style={{ 
                fontSize: '15px', 
                lineHeight: '1.8',
                color: '#333333',
              }}
            >
              {story.content}
            </p>
          </div>

          {/* Story images */}
          <div className="mb-6">
            {story.images.length === 1 ? (
              <div className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ImageWithFallback
                  src={story.images[0]}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {story.images.map((image, index) => (
                  <div 
                    key={index}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${story.title} - ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pull quote */}
          <div 
            className="pl-6 py-4 mb-6 relative"
            style={{ 
              borderLeft: '4px solid #FF1976',
              background: 'rgba(255, 25, 118, 0.03)',
            }}
          >
            <p 
              className="italic"
              style={{ 
                fontSize: '15px',
                color: '#FF1976',
                lineHeight: '1.6',
              }}
            >
              "{story.quote}"
            </p>
          </div>

          {/* Source */}
          <div 
            className="pt-4 border-t flex items-center justify-between"
            style={{ borderColor: '#E0E0E0' }}
          >
            <div className="flex-1">
              <p className="text-xs" style={{ color: '#999999', marginBottom: '4px' }}>출처</p>
              <p className="text-sm" style={{ color: '#666666' }}>{story.source}</p>
            </div>
            <a
              href={story.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg transition-colors"
              style={{ 
                background: 'rgba(255, 25, 118, 0.1)',
                color: '#FF1976',
              }}
            >
              <span className="text-xs">자세히 보기</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Snowflake corner decorations */}
          <div className="absolute top-8 right-8 opacity-5 pointer-events-none">
            <Snowflake size={48} color="#FF1976" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-5 pointer-events-none">
            <Snowflake size={48} color="#FF1976" />
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          className="w-full mt-8 rounded-full text-white transition-transform hover:scale-105"
          style={{
            height: '48px',
            background: 'linear-gradient(135deg, #FF1976, #E91E63)',
            boxShadow: '0 4px 20px rgba(255, 25, 118, 0.4)',
          }}
        >
          다음 챕터로
        </button>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8 mb-6">
          {[1, 2, 3, 4, 5, 6, 7].map((dot) => (
            <div
              key={dot}
              className="rounded-full transition-all"
              style={{
                width: dot === chapterId ? '24px' : '8px',
                height: '8px',
                background: dot === chapterId ? '#FF1976' : 'rgba(255, 255, 255, 0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}