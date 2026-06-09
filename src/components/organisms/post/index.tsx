import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import moment from 'moment';
import React from 'react';
import { IPost } from '../../../types/post';

interface IProps {
  post: IPost;
}

interface IMenuAction {
  icon: string;
  iconColor?: string;
  label: string;
  description?: string;
}

const menuGroups: IMenuAction[][] = [
  [
    { icon: 'fas fa-plus-circle', label: 'Interested', description: 'More of your posts will be like this.' },
    { icon: 'fas fa-minus-circle', label: 'Not interested', description: 'Less of your posts will be like this.' },
  ],
  [
    { icon: 'fas fa-bookmark', label: 'Save post', description: 'Add this to your saved items.' },
  ],
  [
    { icon: 'fas fa-bell', label: 'Turn on notifications for this post' },
    { icon: 'fas fa-info-circle', label: 'Why am I seeing this post?' },
    { icon: 'fas fa-code', label: 'Embed' },
  ],
  [
    { icon: 'fas fa-times-circle', iconColor: 'text-red-500', label: 'Hide post', description: 'See fewer posts like this.' },
    { icon: 'fas fa-clock', label: 'Snooze for 30 days', description: 'Temporarily stop seeing posts.' },
    { icon: 'fas fa-user-slash', iconColor: 'text-red-500', label: 'Unfollow', description: "Stop seeing posts from this Page. They won't be notified that you unfollowed." },
    { icon: 'fas fa-exclamation-circle', iconColor: 'text-red-500', label: 'Report post', description: "We won't let them know who reported this." },
    { icon: 'fas fa-user-times', iconColor: 'text-red-500', label: 'Block profile', description: "You won't be able to see or contact each other." },
  ],
];

const Post: React.FC<IProps> = ({ post }) => {
  const { user } = post;

  return (
    <div className="h-auto w-full rounded-md bg-white shadow dark:bg-neutral-800">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="h-10 w-10">
          <img src={user.dp} className="h-full w-full rounded-full" alt="dp" />
        </div>
        <div className="flex flex-grow flex-col">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {user.fullName}
          </p>
          <span className="text-xs font-thin text-gray-400">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>

        {/* Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-neutral-700">
            <i className="fas fa-ellipsis-h"></i>
          </MenuButton>

          <MenuItems
            anchor="bottom end"
            className="z-50 mt-1 w-72 overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.18)] focus:outline-none dark:bg-neutral-800 dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:w-80"
          >
            <div className="fb-scrollbar max-h-[80vh] overflow-y-auto py-1">
              {menuGroups.map((group, gi) => (
                <div key={gi}>
                  {gi > 0 && (
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                  )}
                  {group.map((item) => (
                    <MenuItem key={item.label}>
                      {({ focus }) => (
                        <button
                          className={`flex w-full items-start gap-3 px-3 py-2 text-left ${
                            focus
                              ? 'bg-gray-100 dark:bg-neutral-700'
                              : ''
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-base dark:bg-neutral-600 ${
                              item.iconColor ?? 'text-gray-700 dark:text-gray-200'
                            }`}
                          >
                            <i className={item.icon}></i>
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {item.description}
                              </span>
                            )}
                          </span>
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>

      {post.caption ? (
        <div className="mb-1">
          <p className="max-h-10 truncate px-3 text-sm text-gray-700 dark:text-gray-300">
            {post.caption}
          </p>
        </div>
      ) : null}
      {post.image ? (
        <div className="h-76 max-h-100 w-full">
          <img
            src={post.image}
            alt="postImage"
            className="h-76 max-h-100 w-full object-cover"
          />
        </div>
      ) : null}

      <div className="flex w-full flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 text-sm dark:border-neutral-700">
          <div className="flex items-center">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white">
              <i style={{ fontSize: 10 }} className="fas fa-heart"></i>
            </span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white">
              <i style={{ fontSize: 10 }} className="fas fa-thumbs-up"></i>
            </span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-white">
              <i style={{ fontSize: 10 }} className="fas fa-surprise"></i>
            </span>
            <p className="ml-1 text-gray-500 dark:text-gray-300">{post.likes}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-500 dark:text-gray-300">
              {post.comments} Comments
            </button>
            <button className="text-gray-500 dark:text-gray-300">
              {post.shares} Shares
            </button>
          </div>
        </div>
        <div className="flex space-x-3 text-sm font-thin text-gray-500">
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <i className="fas fa-thumbs-up"></i>
            <p className="font-semibold">Like</p>
          </button>
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <i className="fas fa-comment"></i>
            <p className="font-semibold">Comment</p>
          </button>
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <i className="fas fa-share"></i>
            <p className="font-semibold">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
