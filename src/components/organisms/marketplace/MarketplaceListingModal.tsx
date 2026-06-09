import React, { useState, useEffect, useCallback } from 'react';
import { IMarketplaceListing } from '../../../types/marketplace';

interface Props {
  listing: IMarketplaceListing;
  onClose: () => void;
}

const MarketplaceListingModal: React.FC<Props> = ({ listing, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [message, setMessage] = useState('Good evening, is this still available?');
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [saved, setSaved] = useState(false);

  const images = listing.images?.length ? listing.images : [listing.image];

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  const descLines = listing.description?.split('\n') ?? [];
  const visibleLines = showFullDesc ? descLines : descLines.slice(0, 4);
  const hasMore = !showFullDesc && descLines.length > 4;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col md:flex-row"
      onClick={onClose}
    >
      {/* ── Image viewer ── */}
      <div
        className="relative flex h-[45vh] shrink-0 items-center justify-center overflow-hidden bg-black md:h-full md:flex-1"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Blurred background */}
        <div
          className="absolute inset-0 scale-110 blur-2xl brightness-40"
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Top-left controls */}
        <div className="absolute left-3 top-3 z-20 flex items-center space-x-2 md:left-4 md:top-4 md:space-x-3">
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 md:h-9 md:w-9"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary md:h-9 md:w-9">
            <i className="fab fa-facebook-f text-sm text-white"></i>
          </div>
        </div>

        {/* Main image */}
        <img
          src={images[activeIndex]}
          alt={listing.title}
          className="relative z-10 max-h-full max-w-full object-contain"
        />

        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 md:left-4 md:h-10 md:w-10"
          >
            <i className="fas fa-chevron-left text-xs md:text-sm"></i>
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 md:right-4 md:h-10 md:w-10"
          >
            <i className="fas fa-chevron-right text-xs md:text-sm"></i>
          </button>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:bottom-4 md:gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-9 w-9 overflow-hidden rounded transition-all md:h-12 md:w-12 ${
                  i === activeIndex
                    ? 'border-2 border-white opacity-100'
                    : 'border-2 border-transparent opacity-50 hover:opacity-75'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Detail panel ── */}
      <div
        className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#242526] md:w-[360px] md:flex-none md:shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Title, price, listed */}
          <h2 className="text-lg font-bold text-black dark:text-white sm:text-xl">{listing.title}</h2>
          <p className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            {listing.isFree ? 'FREE' : `BDT${listing.price.toLocaleString()}`}
          </p>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            Listed {listing.listedAgo ?? 'recently'} in {listing.location}
          </p>

          {/* Action buttons */}
          <div className="mt-3 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-100 py-2 text-sm font-semibold text-primary hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50">
              <i className="fas fa-comment-dots text-xs"></i>
              Message
            </button>
            <button
              onClick={() => setSaved((s) => !s)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                saved
                  ? 'bg-blue-100 text-primary dark:bg-blue-900/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-600'
              }`}
            >
              <i className={`${saved ? 'fas' : 'far'} fa-bookmark text-sm`}></i>
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-600">
              <i className="fas fa-share text-sm"></i>
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-600">
              <i className="fas fa-ellipsis-h text-sm"></i>
            </button>
          </div>

          {/* Details */}
          <div className="mt-4">
            <h3 className="mb-2 text-base font-bold text-black dark:text-white">Details</h3>
            {listing.condition && (
              <div className="flex items-start justify-between py-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">Condition</span>
                <span className="text-right text-sm text-black dark:text-white">{listing.condition}</span>
              </div>
            )}
            {listing.description && (
              <div className="mt-2 space-y-0.5 text-sm text-black dark:text-gray-200">
                {visibleLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {hasMore && (
                  <button
                    onClick={() => setShowFullDesc(true)}
                    className="mt-1 text-sm font-semibold text-primary"
                  >
                    ... See more
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Map placeholder */}
          <div className="mt-4">
            <div
              className="relative h-[110px] overflow-hidden rounded-lg sm:h-[130px]"
              style={{ background: 'linear-gradient(135deg, #4db6a0 0%, #3da898 50%, #2c8f7f 100%)' }}
            >
              <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
                {[...Array(8)].map((_, i) => (
                  <line key={`v${i}`} x1={`${(i + 1) * 12.5}%`} y1="0" x2={`${(i + 1) * 12.5}%`} y2="100%" stroke="white" strokeWidth="0.5" />
                ))}
                {[...Array(5)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={`${(i + 1) * 20}%`} x2="100%" y2={`${(i + 1) * 20}%`} stroke="white" strokeWidth="0.5" />
                ))}
                <line x1="0" y1="40%" x2="100%" y2="55%" stroke="white" strokeWidth="2.5" opacity="0.5" />
                <line x1="30%" y1="0" x2="45%" y2="100%" stroke="white" strokeWidth="2" opacity="0.4" />
                <line x1="60%" y1="0" x2="70%" y2="100%" stroke="white" strokeWidth="1.5" opacity="0.3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
                  <i className="fas fa-map-marker-alt text-sm text-red-500"></i>
                </div>
              </div>
              <button className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-xs text-gray-600">
                <i className="fas fa-info text-xs"></i>
              </button>
            </div>
            <p className="mt-1.5 text-sm font-semibold text-black dark:text-white">{listing.location}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Location is approximate</p>
          </div>

          {/* Seller information */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-black dark:text-white">Seller information</h3>
              <button className="text-sm font-semibold text-primary hover:underline">Seller details</button>
            </div>
            {listing.seller && (
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="relative shrink-0">
                    <img
                      src={listing.seller.dp ?? 'https://random.imagecdn.app/200/200'}
                      alt={listing.seller.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-[#242526]"></span>
                  </div>
                  <p className="text-sm font-semibold text-black dark:text-white">{listing.seller.name}</p>
                </div>
                {listing.seller.responsive && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"></span>
                    Very Responsive on Marketplace
                  </div>
                )}
                {listing.seller.joinedYear && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <i className="fab fa-facebook text-base text-primary"></i>
                    Joined Facebook in {listing.seller.joinedYear}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Fixed bottom: message input */}
        <div className="border-t border-gray-200 p-3 dark:border-neutral-700 sm:p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
            <i className="fab fa-facebook-messenger text-primary"></i>
            Send seller a message
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            className="mb-2 w-full resize-none rounded-lg bg-gray-100 px-3 py-2 text-sm text-black focus:outline-none dark:bg-neutral-700 dark:text-white"
          />
          <button className="w-full rounded-lg bg-primary py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceListingModal;
