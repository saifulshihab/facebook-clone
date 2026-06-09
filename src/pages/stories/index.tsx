import moment from 'moment';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { storiesData } from '../../lib/data';

const REACTIONS = ['👍', '❤️', '😍', '😄', '😮', '😢', '😡'];

const StoriesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = Math.max(
    0,
    storiesData.findIndex((s) => s._id === id),
  );
  const currentStory = storiesData[currentIndex];

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < storiesData.length - 1;

  return (
    <div className="flex h-full">
      {/* ── Left sidebar ── */}
      <aside className="fb-scrollbar hidden h-full w-[360px] flex-shrink-0 flex-col overflow-y-auto bg-[#242526] shadow-xl md:flex">
        {/* Header */}
        <div className="px-4 pt-5">
          <h2 className="text-xl font-bold text-gray-100">Stories</h2>
          <div className="mt-1 flex gap-2 text-sm text-[#2d88ff]">
            <button className="hover:underline focus:outline-none">
              Archive
            </button>
            <span className="text-gray-500">·</span>
            <button className="hover:underline focus:outline-none">
              Settings
            </button>
          </div>
        </div>

        {/* Your story */}
        <div className="mt-4 px-3">
          <p className="mb-2 px-1 text-sm font-semibold text-gray-400">
            Your story
          </p>
          <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-neutral-700 focus:outline-none">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-600">
              <i className="fas fa-plus text-lg text-[#2d88ff]"></i>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-100">
                Create a story
              </p>
              <p className="text-xs text-gray-400">
                Share a photo or write something.
              </p>
            </div>
          </button>
        </div>

        <div className="mx-4 my-3 border-t border-neutral-600" />

        {/* All stories */}
        <div className="px-3 pb-4">
          <p className="mb-2 px-1 text-sm font-semibold text-gray-400">
            All stories
          </p>
          {storiesData.map((story) => (
            <Link
              key={story._id}
              to={`/stories/${story._id}`}
              className={`flex items-center gap-3 rounded-xl px-2 py-2 transition-colors ${
                story._id === id ? 'bg-[#3a3b3c]' : 'hover:bg-neutral-700'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={story.user.dp ?? 'https://random.imagecdn.app/200/200'}
                  className="h-12 w-12 rounded-full border-2 border-[#2d88ff] object-cover"
                  alt={story.user.fullName}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-100">
                  {story.user.fullName}
                </p>
                <p className="text-xs text-gray-400">
                  1 new · {moment(story.createdAt).fromNow(true)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* ── Story viewer ── */}
      <main className="relative flex h-full flex-1 flex-col overflow-hidden bg-[#18191a]">
        {/* Prev button */}
        {hasPrev && (
          <button
            onClick={() =>
              navigate(`/stories/${storiesData[currentIndex - 1]._id}`)
            }
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none"
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            onClick={() =>
              navigate(`/stories/${storiesData[currentIndex + 1]._id}`)
            }
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none"
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>
        )}

        {/* Card area — fills all vertical space above the bottom bar */}
        <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-2 pt-4">
          {/* Story card — height fills this area; width derived from aspect-ratio */}
          <div
            className="relative h-full max-h-[620px] overflow-hidden rounded-2xl shadow-2xl"
            style={{ aspectRatio: '9 / 16' }}
          >
            {/* Background image */}
            <img
              src={currentStory.image}
              alt="story"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Top gradient overlay */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent" />

            {/* Top controls */}
            <div className="absolute inset-x-0 top-0 p-3">
              {/* Progress bar */}
              <div className="flex gap-1">
                {storiesData.map((s, i) => (
                  <div
                    key={s._id}
                    className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/40"
                  >
                    <div
                      className="h-full bg-white transition-all duration-300"
                      style={{
                        width:
                          i < currentIndex
                            ? '100%'
                            : i === currentIndex
                              ? '45%'
                              : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* User row */}
              <div className="mt-3 flex items-center gap-2">
                <img
                  src={
                    currentStory.user.dp ??
                    'https://random.imagecdn.app/200/200'
                  }
                  className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-white object-cover"
                  alt={currentStory.user.fullName}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">
                    {currentStory.user.fullName}
                  </p>
                  <p className="text-xs text-white/70">
                    {moment(currentStory.createdAt).fromNow()} ·{' '}
                    <i className="fas fa-globe-asia text-[10px]"></i>
                  </p>
                </div>
                <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10 focus:outline-none">
                  <i className="fas fa-volume-mute text-sm"></i>
                </button>
                <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10 focus:outline-none">
                  <i className="fas fa-pause text-sm"></i>
                </button>
                <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10 focus:outline-none">
                  <i className="fas fa-ellipsis-h text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls — pinned, fixed height */}
        <div className="flex-shrink-0 px-4 pb-4 pt-2">
          <div className="mx-auto flex w-full max-w-[340px] flex-col gap-2">
            {/* Send message */}
            <div className="flex items-center rounded-full border border-white/30 px-4 py-2">
              <input
                type="text"
                placeholder="Send message..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
            </div>

            {/* Emoji reactions */}
            <div className="flex items-center justify-center gap-3">
              {REACTIONS.map((emoji) => (
                <button
                  key={emoji}
                  className="text-2xl transition-transform hover:scale-125 focus:outline-none"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoriesPage;
