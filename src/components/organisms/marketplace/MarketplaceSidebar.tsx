import React from 'react';

const categories = [
  { label: 'Vehicles', icon: 'fas fa-car' },
  { label: 'Property Rentals', icon: 'fas fa-building' },
  { label: 'Apparel', icon: 'fas fa-tshirt' },
  { label: 'Classifieds', icon: 'fas fa-tag' },
  { label: 'Electronics', icon: 'fas fa-bolt' },
  { label: 'Entertainment', icon: 'fas fa-film' },
  { label: 'Family', icon: 'fas fa-users' },
  { label: 'Free Stuff', icon: 'fas fa-gift' },
  { label: 'Garden & Outdoor', icon: 'fas fa-leaf' },
  { label: 'Hobbies', icon: 'fas fa-puzzle-piece' },
  { label: 'Home Goods', icon: 'fas fa-couch' },
  { label: 'Home Improvement', icon: 'fas fa-hammer' },
  { label: 'Home Sales', icon: 'fas fa-home' },
  { label: 'Musical Instruments', icon: 'fas fa-music' },
  { label: 'Pet Supplies', icon: 'fas fa-paw' },
  { label: 'Sporting Goods', icon: 'fas fa-dumbbell' },
  { label: 'Toys & Games', icon: 'fas fa-gamepad' },
];

interface Props {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const MarketplaceSidebar: React.FC<Props> = ({ isMobileOpen = false, onMobileClose }) => {
  return (
    <>
      {/* Backdrop — mobile only */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <div
        className={`
          fixed md:sticky
          top-0 md:top-[56px]
          h-full md:h-[calc(100vh-56px)]
          w-[300px] md:w-[360px]
          shrink-0
          z-40 md:z-auto
          overflow-y-auto
          border-r border-gray-200 dark:border-neutral-700
          bg-white dark:bg-[#242526]
          px-3 py-4
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black dark:text-white">Marketplace</h1>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600">
              <i className="fas fa-cog text-sm"></i>
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 md:hidden"
              onClick={onMobileClose}
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400"></i>
          <input
            placeholder="Search Marketplace"
            className="w-full rounded-full bg-gray-100 py-2 pl-9 pr-4 text-sm focus:outline-none dark:bg-neutral-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        {/* Nav items */}
        <ul className="mb-2 space-y-0.5">
          <li className="flex cursor-pointer items-center space-x-3 rounded-lg bg-blue-50 px-2 py-2 dark:bg-blue-900/20">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/40">
              <i className="fas fa-store text-sm text-primary"></i>
            </div>
            <span className="text-sm font-semibold text-primary">Browse all</span>
          </li>
          <li className="flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
              <i className="fas fa-bell text-sm text-black dark:text-gray-200"></i>
            </div>
            <span className="text-sm font-semibold text-black dark:text-gray-200">Notifications</span>
          </li>
          <li className="flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
              <i className="fas fa-inbox text-sm text-black dark:text-gray-200"></i>
            </div>
            <span className="text-sm font-semibold text-black dark:text-gray-200">Inbox</span>
          </li>
          <li className="flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
              <i className="fas fa-shield-alt text-sm text-black dark:text-gray-200"></i>
            </div>
            <span className="text-sm font-semibold text-black dark:text-gray-200">Marketplace access</span>
          </li>
          <li className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
                <i className="fas fa-shopping-bag text-sm text-black dark:text-gray-200"></i>
              </div>
              <span className="text-sm font-semibold text-black dark:text-gray-200">Buying</span>
            </div>
            <i className="fas fa-chevron-right text-xs text-gray-500 dark:text-gray-400"></i>
          </li>
          <li className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
                <i className="fas fa-tag text-sm text-black dark:text-gray-200"></i>
              </div>
              <span className="text-sm font-semibold text-black dark:text-gray-200">Selling</span>
            </div>
            <i className="fas fa-chevron-right text-xs text-gray-500 dark:text-gray-400"></i>
          </li>
        </ul>

        {/* Create listing */}
        <button className="mb-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-100 py-2 font-semibold text-primary hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50">
          <i className="fas fa-plus text-sm"></i>
          <span className="text-sm">Create new listing</span>
        </button>

        <hr className="mb-3 border-gray-200 dark:border-neutral-700" />

        {/* Location */}
        <div className="mb-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Location
          </p>
          <button className="text-sm font-semibold text-primary hover:underline">
            Chandpur, Bangladesh · Within 65 km
          </button>
        </div>

        {/* Categories */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Categories
          </p>
          <ul className="space-y-0.5">
            {categories.map((cat) => (
              <li
                key={cat.label}
                className="flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
                onClick={onMobileClose}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
                  <i className={`${cat.icon} text-sm text-black dark:text-gray-200`}></i>
                </div>
                <span className="text-sm font-semibold text-black dark:text-gray-200">{cat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MarketplaceSidebar;
