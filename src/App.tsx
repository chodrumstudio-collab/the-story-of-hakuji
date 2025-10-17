import { useState, useCallback } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { TimelineHome } from './components/TimelineHome';
import { DualProfile } from './components/DualProfile';
import { StoryDetail } from './components/StoryDetail';
import { RelationshipDiagram } from './components/RelationshipDiagram';
import { VideoList } from './components/VideoList';
import { FanMessages } from './components/FanMessages';
import { BottomNav } from './components/BottomNav';

type Screen = 'splash' | 'timeline' | 'profile' | 'story' | 'relationships' | 'videos' | 'messages';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedChapter, setSelectedChapter] = useState<number>(3);

  const handleSplashComplete = useCallback(() => {
    setCurrentScreen('timeline');
  }, []);

  const handleChapterSelect = useCallback((chapter: number) => {
    setSelectedChapter(chapter);
    setCurrentScreen('story');
  }, []);

  const handleBack = useCallback(() => {
    setCurrentScreen('timeline');
  }, []);

  const handleNext = useCallback(() => {
    if (selectedChapter < 7) {
      setSelectedChapter(selectedChapter + 1);
    } else {
      setCurrentScreen('timeline');
    }
  }, [selectedChapter]);

  const handleNavigate = useCallback((screen: string) => {
    setCurrentScreen(screen as Screen);
  }, []);

  return (
    <div 
      className="relative mx-auto overflow-x-hidden"
      style={{
        width: '393px',
        minHeight: '100vh',
        background: '#0A0E27',
      }}
    >
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {currentScreen === 'timeline' && (
        <>
          <TimelineHome onChapterSelect={handleChapterSelect} />
          <BottomNav activeScreen="timeline" onNavigate={handleNavigate} />
        </>
      )}

      {currentScreen === 'profile' && (
        <>
          <DualProfile />
          <BottomNav activeScreen="profile" onNavigate={handleNavigate} />
        </>
      )}

      {currentScreen === 'story' && (
        <StoryDetail 
          chapterId={selectedChapter} 
          onBack={handleBack}
          onNext={handleNext}
        />
      )}

      {currentScreen === 'relationships' && (
        <>
          <RelationshipDiagram />
          <BottomNav activeScreen="relationships" onNavigate={handleNavigate} />
        </>
      )}

      {currentScreen === 'videos' && (
        <>
          <VideoList />
          <BottomNav activeScreen="videos" onNavigate={handleNavigate} />
        </>
      )}

      {currentScreen === 'messages' && (
        <>
          <FanMessages />
          <BottomNav activeScreen="messages" onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
}
