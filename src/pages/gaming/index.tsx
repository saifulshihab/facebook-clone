import React from 'react';
import GamingLeftSidebar from '../../components/organisms/gaming/GamingLeftSidebar';
import HappeningNowSection from '../../components/organisms/gaming/HappeningNowSection';
import MostPlayedSection from '../../components/organisms/gaming/MostPlayedSection';
import TopPicksSection from '../../components/organisms/gaming/TopPicksSection';

const GamingPage: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <GamingLeftSidebar />
      <main className="fb-scrollbar flex-1 overflow-y-auto bg-gray-100 px-3 py-4 dark:bg-neutral-900 md:px-4 md:py-5 lg:px-6">
        <TopPicksSection />
        <HappeningNowSection />
        <MostPlayedSection />
      </main>
    </div>
  );
};

export default GamingPage;
