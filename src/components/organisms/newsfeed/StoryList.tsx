import React, { useEffect, useRef, useState } from 'react';
import { storiesData } from '../../../data';
import Story from './Story';

const SCROLL_AMOUNT = 240;

const StoryList: React.FC = () => {
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
    return () => el?.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative my-6 w-full">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600"
        >
          <i className="fas fa-chevron-left text-sm text-gray-700 dark:text-gray-200"></i>
        </button>
      )}

      {/* Scrollable story row */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex items-center space-x-2 overflow-x-auto"
      >
        {/* Create Story card */}
        <div
          className="relative h-48 w-28 flex-shrink-0 rounded-xl bg-cover bg-center shadow"
          style={{ backgroundImage: `url('https://random.imagecdn.app/500/400')` }}
        >
          <div className="absolute flex w-full justify-center" style={{ bottom: '11%' }}>
            <button className="z-40 h-10 w-10 rounded-full border-4 border-white bg-primary focus:outline-none dark:border-neutral-800">
              <i className="fas fa-plus text-white"></i>
            </button>
          </div>
          <div className="absolute bottom-0 z-30 w-full rounded-b-xl bg-white p-2 pt-4 text-center dark:bg-neutral-800">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-200">
              Create Story
            </p>
          </div>
        </div>

        {storiesData.map((story) => (
          <Story key={story._id} story={story} />
        ))}
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600"
        >
          <i className="fas fa-chevron-right text-sm text-gray-700 dark:text-gray-200"></i>
        </button>
      )}
    </div>
  );
};

export default StoryList;
