import React, { useState } from 'react';
import { groupsData } from '../../../lib/data';

interface Props {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const navItems = [
  { icon: 'fas fa-rss', label: 'Your feed', active: true },
  { icon: 'fas fa-compass', label: 'Discover' },
  { icon: 'fas fa-users', label: 'Your groups' },
];

const GroupLeftSidebar: React.FC<Props> = ({
  isMobileOpen = false,
  onMobileClose,
}) => {
  const [search, setSearch] = useState('');

  const filtered = groupsData.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <div
        className={`fixed top-0 z-40 h-full w-[300px] shrink-0 overflow-y-auto border-r border-gray-200 bg-white px-3 py-4 transition-transform duration-300 ease-in-out md:sticky md:top-[56px] md:z-auto md:h-[calc(100vh-56px)] md:w-[360px] dark:border-neutral-700 dark:bg-[#242526] ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} `}
      >
        {/* Header */}
        <div className="mb-3 flex items-center justify-between px-1">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Groups
          </h1>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600">
              <i className="fas fa-cog text-sm"></i>
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 md:hidden dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
              onClick={onMobileClose}
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search groups"
            className="w-full rounded-full bg-gray-100 py-2 pl-9 pr-4 text-sm focus:outline-none dark:bg-neutral-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        {/* Nav items */}
        <ul className="mb-2 space-y-0.5">
          {navItems.map((item) => (
            <li
              key={item.label}
              onClick={onMobileClose}
              className={`flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 ${
                item.active
                  ? 'bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
              }`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  item.active
                    ? 'bg-blue-100 dark:bg-blue-800/40'
                    : 'bg-gray-200 dark:bg-neutral-700'
                }`}
              >
                <i
                  className={`${item.icon} text-sm ${
                    item.active
                      ? 'text-primary'
                      : 'text-black dark:text-gray-200'
                  }`}
                ></i>
              </div>
              <span
                className={`text-sm font-semibold ${
                  item.active ? 'text-primary' : 'text-black dark:text-gray-200'
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Create new group */}
        <button className="mb-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-100 py-2 font-semibold text-primary hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50">
          <i className="fas fa-plus text-sm"></i>
          <span className="text-sm">Create new group</span>
        </button>

        <hr className="mb-3 border-gray-200 dark:border-neutral-700" />

        {/* Groups you've joined */}
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-base font-bold text-black dark:text-white">
            Groups you've joined
          </span>
          <button className="text-sm font-semibold text-primary hover:underline">
            See all
          </button>
        </div>

        <ul className="space-y-0.5">
          {filtered.map((group) => (
            <li
              key={group._id}
              onClick={onMobileClose}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <img
                src={group.image}
                alt={group.name}
                className="h-10 w-10 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-black dark:text-gray-200">
                  {group.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {group.lastActive}
                </p>
              </div>
              {group.isPinned && (
                <i className="fas fa-thumbtack text-xs text-gray-400 dark:text-gray-500"></i>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GroupLeftSidebar;
