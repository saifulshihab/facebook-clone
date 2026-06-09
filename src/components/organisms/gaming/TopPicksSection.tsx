import React, { useEffect, useRef, useState } from 'react';
import { topPicksData } from '../../../lib/data';
import GameCard from './GameCard';

const SCROLL_AMOUNT = 600;

const TopPicksSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    return () => {
      el?.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-bold text-gray-900 md:text-xl dark:text-white">
        Top picks for you
      </h2>
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600"
          >
            <i className="fas fa-chevron-left text-sm text-gray-700 dark:text-gray-200"></i>
          </button>
        )}

        <div ref={scrollRef} className="scrollbar-hide overflow-x-auto">
          <div className="grid grid-flow-col grid-rows-1 gap-2 pb-1 md:grid-rows-2">
            {topPicksData.map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600"
          >
            <i className="fas fa-chevron-right text-sm text-gray-700 dark:text-gray-200"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default TopPicksSection;
