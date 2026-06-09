import React from 'react';
import { IMarketplaceListing } from '../../../types/marketplace';

interface Props {
  listing: IMarketplaceListing;
  onClick?: () => void;
}

const MarketplaceListingCard: React.FC<Props> = ({ listing, onClick }) => {
  return (
    <div className="cursor-pointer rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors" onClick={onClick}>
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-neutral-700">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-1.5">
        <p className="text-sm font-bold text-black dark:text-white">
          {listing.isFree ? 'FREE' : `BDT${listing.price.toLocaleString()}`}
        </p>
        <p className="line-clamp-2 text-sm leading-tight text-black dark:text-gray-200">
          {listing.title}
        </p>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{listing.location}</p>
      </div>
    </div>
  );
};

export default MarketplaceListingCard;
