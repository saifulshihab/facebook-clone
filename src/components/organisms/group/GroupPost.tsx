import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import moment from 'moment';
import React, { useState } from 'react';
import { IGroupPost } from '../../../types/group';

interface IProps {
  post: IGroupPost;
}

const reactionBg: Record<string, string> = {
  'fas fa-thumbs-up': 'bg-primary',
  'fas fa-heart': 'bg-red-500',
  'fas fa-laugh': 'bg-yellow-400',
  'fas fa-surprise': 'bg-yellow-500',
};

interface IMenuAction {
  icon: string;
  iconColor?: string;
  label: string;
  description?: string;
}

const menuGroups: IMenuAction[][] = [
  [
    { icon: 'fas fa-bookmark', label: 'Save post', description: 'Add this to your saved items.' },
  ],
  [
    { icon: 'fas fa-bell', label: 'Turn on notifications for this post' },
    { icon: 'fas fa-info-circle', label: 'Why am I seeing this post?' },
  ],
  [
    { icon: 'fas fa-times-circle', iconColor: 'text-red-500', label: 'Hide post', description: 'See fewer posts like this.' },
    { icon: 'fas fa-exclamation-circle', iconColor: 'text-red-500', label: 'Report post', description: "We won't let them know who reported this." },
  ],
];

const GroupPost: React.FC<IProps> = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 160;
  const isLong = post.content.length > LIMIT;
  const displayContent =
    expanded || !isLong
      ? post.content
      : post.content.slice(0, LIMIT).trimEnd() + '...';

  const uniqueReactions = [...new Set(post.likeReactions ?? [])].slice(0, 3);

  return (
    <div className="w-full rounded-xl bg-white shadow dark:bg-neutral-800">
      {/* Group attribution header */}
      <div className="flex items-start justify-between p-3 pb-0 sm:px-4">
        <div className="flex items-center gap-2">
          <img
            src={post.group.image}
            alt={post.group.name}
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900 dark:text-white">
              {post.group.name}
            </p>
            <div className="flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {post.user.fullName}
              </span>
              {post.user.badge && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    <i className="fas fa-shield-alt text-[10px] text-amber-500"></i>
                    <span>{post.user.badge}</span>
                  </span>
                </>
              )}
              <span>·</span>
              <span>{moment(post.createdAt).fromNow()}</span>
              <span>·</span>
              <i
                className={`text-[11px] ${
                  post.group.isPublic ? 'fas fa-globe-americas' : 'fas fa-lock'
                }`}
              ></i>
            </div>
          </div>
        </div>

        <Menu as="div" className="relative ml-2 mt-1 shrink-0">
          <MenuButton className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-neutral-700">
            <i className="fas fa-ellipsis-h"></i>
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="z-50 mt-1 w-72 overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.18)] focus:outline-none dark:bg-neutral-800 dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
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
                            focus ? 'bg-gray-100 dark:bg-neutral-700' : ''
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-base dark:bg-neutral-600 ${
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

      {/* Content */}
      <div className="px-3 py-2 sm:px-4">
        <p className="whitespace-pre-line text-sm text-gray-800 dark:text-gray-200">
          {displayContent}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-semibold text-gray-500 hover:underline dark:text-gray-400"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-1.5 text-sm dark:border-neutral-700 sm:px-4">
        <div className="flex items-center gap-1">
          <div className="flex">
            {uniqueReactions.map((r, i) => (
              <span
                key={i}
                className={`flex h-4 w-4 items-center justify-center rounded-full text-white ${reactionBg[r] ?? 'bg-primary'} ${i > 0 ? '-ml-1' : ''}`}
              >
                <i style={{ fontSize: 9 }} className={r}></i>
              </span>
            ))}
          </div>
          <span className="text-gray-500 dark:text-gray-400">{post.likes}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
          <button className="hover:underline">{post.commentsCount} comments</button>
          {post.sharesCount > 0 && (
            <button className="hover:underline">{post.sharesCount} shares</button>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex border-b border-gray-200 dark:border-neutral-700">
        {[
          { icon: 'fas fa-thumbs-up', label: 'Like' },
          { icon: 'fas fa-comment', label: 'Comment' },
          { icon: 'fas fa-share', label: 'Share' },
        ].map((btn) => (
          <button
            key={btn.label}
            className="flex flex-1 items-center justify-center gap-2 py-1.5 text-sm font-semibold text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-neutral-700"
          >
            <i className={btn.icon}></i>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>

      {/* Comments preview */}
      {post.comments && post.comments.length > 0 && (
        <div className="space-y-3 px-3 py-3 sm:px-4">
          {post.comments.length > 2 && (
            <button className="text-sm font-semibold text-gray-500 hover:underline dark:text-gray-400">
              View more comments
            </button>
          )}

          {post.comments.slice(0, 2).map((comment) => (
            <div key={comment._id} className="flex gap-2">
              <img
                src={comment.user.dp}
                alt={comment.user.fullName}
                className="h-8 w-8 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="rounded-2xl bg-gray-100 px-3 py-2 dark:bg-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {comment.user.fullName}
                    </span>
                    {comment.user.isVerified && (
                      <i className="fas fa-check-circle text-xs text-primary"></i>
                    )}
                    {comment.user.isFollowing && (
                      <button className="text-xs font-semibold text-primary hover:underline">
                        · Follow
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {comment.text}
                  </p>
                </div>
                <div className="mt-0.5 flex items-center gap-3 px-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{moment(comment.createdAt).fromNow()}</span>
                  <button className="font-semibold hover:underline">Like</button>
                  <button className="font-semibold hover:underline">Reply</button>
                  <button className="font-semibold hover:underline">Share</button>
                  {comment.likes > 0 && (
                    <span className="ml-auto flex items-center gap-1">
                      {comment.likes}
                      <span className="flex">
                        {(comment.reactions ?? []).slice(0, 2).map((r, i) => (
                          <span
                            key={i}
                            className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-white ${reactionBg[r] ?? 'bg-primary'} ${i > 0 ? '-ml-0.5' : ''}`}
                          >
                            <i style={{ fontSize: 8 }} className={r}></i>
                          </span>
                        ))}
                      </span>
                    </span>
                  )}
                </div>
                {comment.replyCount != null && comment.replyCount > 0 && (
                  <button className="mt-0.5 px-2 text-xs font-semibold text-gray-500 hover:underline dark:text-gray-400">
                    View all {comment.replyCount} replies
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Comment input */}
          <div className="flex items-center gap-2 pt-1">
            <img
              src="https://random.imagecdn.app/500/200"
              alt="You"
              className="h-8 w-8 shrink-0 rounded-full object-cover"
            />
            <div className="flex flex-1 items-center rounded-full bg-gray-100 px-3 py-2 dark:bg-neutral-700 sm:px-4">
              <span className="min-w-0 truncate text-sm text-gray-400 dark:text-gray-500">
                Comment as Saiful
              </span>
              <div className="ml-auto flex shrink-0 items-center gap-1.5 text-gray-400 sm:gap-2">
                <button><i className="far fa-smile text-sm"></i></button>
                <button className="hidden xs:block"><i className="far fa-grin text-sm"></i></button>
                <button><i className="far fa-image text-sm"></i></button>
                <button className="hidden sm:block"><i className="fas fa-sticker text-sm"></i></button>
                <button className="hidden sm:block"><i className="far fa-heart text-sm"></i></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupPost;
