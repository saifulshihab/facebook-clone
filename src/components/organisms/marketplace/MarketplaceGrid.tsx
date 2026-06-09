import React, { useState } from 'react';
import { marketplaceListingsData } from '../../../lib/data';
import { IMarketplaceListing } from '../../../types/marketplace';
import MarketplaceListingCard from './MarketplaceListingCard';
import MarketplaceListingModal from './MarketplaceListingModal';

interface Props {
  onOpenSidebar?: () => void;
}

const MarketplaceGrid: React.FC<Props> = ({ onOpenSidebar }) => {
  const [selectedListing, setSelectedListing] =
    useState<IMarketplaceListing | null>(null);

  return (
    <>
      <div className="flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 md:hidden dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
              onClick={onOpenSidebar}
              aria-label="Open menu"
            >
              <i className="fas fa-bars text-sm"></i>
            </button>
            <h2 className="text-lg font-bold text-black sm:text-xl dark:text-white">
              Today's picks
            </h2>
          </div>
          <span className="flex items-center gap-1 text-xs text-primary sm:text-sm">
            <i className="fas fa-map-marker-alt text-xs"></i>
            <span className="xs:inline hidden">চাঁদপুর · 65 km</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {marketplaceListingsData.map((listing) => (
            <MarketplaceListingCard
              key={listing._id}
              listing={listing}
              onClick={() => setSelectedListing(listing)}
            />
          ))}
        </div>
      </div>

      {selectedListing && (
        <MarketplaceListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}
    </>
  );
};

export default MarketplaceGrid;
