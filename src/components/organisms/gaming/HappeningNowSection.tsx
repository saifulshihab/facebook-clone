import React, { useEffect, useRef, useState } from 'react';
import { gameEventsData } from '../../../lib/data';
import { IGameEvent } from '../../../types/game';

const SCROLL_AMOUNT = 600;

const EventCard: React.FC<{ event: IGameEvent }> = ({ event }) => (
  <div className="relative w-40 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow transition-transform hover:scale-[1.02] md:w-48">
    <div className="absolute left-0 right-0 top-0 z-10 flex items-center space-x-1.5 bg-gradient-to-b from-black/70 to-transparent p-2">
      <img
        src={event.gameIcon}
        alt={event.gameTitle}
        className="h-6 w-6 rounded-full object-cover"
      />
      <span className="truncate text-xs font-semibold text-white">
        {event.gameTitle}
      </span>
    </div>

    <img
      src={event.eventImage}
      alt={event.title}
      className="h-60 w-full object-cover md:h-72"
    />

    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2.5 pt-8">
      <p className="text-[10px] font-bold uppercase tracking-wide text-blue-400">
        ENDS IN {event.endsInDays} DAYS
      </p>
      <p className="mt-0.5 text-sm font-bold leading-tight text-white">
        {event.title}
      </p>
      <p className="mt-0.5 line-clamp-2 text-[10px] leading-tight text-gray-300">
        {event.description}
      </p>
    </div>
  </div>
);

const HappeningNowSection: React.FC = () => {
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
        Happening now
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

        <div
          ref={scrollRef}
          className="scrollbar-hide flex space-x-3 overflow-x-auto pb-1"
        >
          {gameEventsData.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
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

export default HappeningNowSection;
