import React from 'react';
import { groupPostsData } from '../../../lib/data';
import GroupPost from './GroupPost';

interface Props {
  onOpenSidebar?: () => void;
}

const GroupFeed: React.FC<Props> = ({ onOpenSidebar }) => {
  return (
    <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-4">
      <div className="mb-4 flex items-center gap-2">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 md:hidden dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
          onClick={onOpenSidebar}
          aria-label="Open groups menu"
        >
          <i className="fas fa-bars text-sm"></i>
        </button>
        <h2 className="text-lg font-bold text-black sm:text-xl dark:text-white">
          Recent activity
        </h2>
      </div>
      <div className="mx-auto max-w-2xl space-y-4">
        {groupPostsData.map((post) => (
          <GroupPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default GroupFeed;
