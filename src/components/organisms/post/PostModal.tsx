import { Dialog, DialogPanel } from '@headlessui/react';
import moment from 'moment';
import React, { useState } from 'react';
import { IComment, IPost } from '../../../types/post';

interface IProps {
  post: IPost;
  isOpen: boolean;
  onClose: () => void;
}

const CommentItem: React.FC<{ comment: IComment; isReply?: boolean }> = ({
  comment,
  isReply = false,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={`flex gap-2 ${isReply ? 'ml-10 mt-2' : 'mt-4'}`}>
      <img
        src={comment.user.dp ?? 'https://random.imagecdn.app/200/200'}
        className="h-8 w-8 flex-shrink-0 rounded-full"
        alt="dp"
      />
      <div className="flex flex-col">
        <div className="relative inline-block rounded-2xl bg-gray-100 px-3 py-2 dark:bg-neutral-700">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {comment.user.fullName}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {comment.text}
          </p>
          {comment.likes > 0 && (
            <div className="absolute -bottom-3 right-2 flex items-center gap-0.5 rounded-full bg-white px-1 py-0.5 shadow dark:bg-neutral-600">
              <i className="fas fa-thumbs-up text-[10px] text-primary"></i>
              <span className="text-[11px] text-gray-500 dark:text-gray-300">
                {comment.likes}
              </span>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
          <span>{moment(comment.createdAt).fromNow()}</span>
          <button className="hover:underline">Like</button>
          <button className="hover:underline">Reply</button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <button
            onClick={() => setShowReplies((v) => !v)}
            className="mt-2 flex items-center gap-1 text-xs font-semibold text-gray-500 hover:underline dark:text-gray-400"
          >
            <i
              className={`fas fa-${showReplies ? 'chevron-up' : 'chevron-down'} text-[10px]`}
            ></i>
            {showReplies
              ? 'Hide replies'
              : `View all ${comment.replies.length} ${comment.replies.length === 1 ? 'reply' : 'replies'}`}
          </button>
        )}
        {showReplies &&
          comment.replies?.map((reply) => (
            <CommentItem key={reply._id} comment={reply} isReply />
          ))}
      </div>
    </div>
  );
};

const PostModal: React.FC<IProps> = ({ post, isOpen, onClose }) => {
  const { user } = post;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <DialogPanel className="flex h-full max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-neutral-800">
          {/* Header */}
          <div className="relative flex flex-shrink-0 items-center justify-center border-b px-4 py-3 dark:border-neutral-700">
            <p className="text-base font-bold text-gray-900 dark:text-gray-100">
              {user.fullName}&apos;s Post
            </p>
            <button
              onClick={onClose}
              className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Scrollable body */}
          <div className="fb-scrollbar min-h-0 flex-1 overflow-y-auto">
            {/* Post header */}
            <div className="flex items-center gap-3 px-4 pt-4">
              <img
                src={user.dp ?? 'https://random.imagecdn.app/200/200'}
                className="h-10 w-10 rounded-full"
                alt="dp"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {user.fullName}
                </p>
                <p className="text-xs text-gray-400">
                  {moment(post.createdAt).fromNow()} ·{' '}
                  <i className="fas fa-globe-asia"></i>
                </p>
              </div>
            </div>

            {post.caption && (
              <p className="px-4 pt-2 text-sm text-gray-700 dark:text-gray-300">
                {post.caption}
              </p>
            )}

            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="mt-3 w-full object-cover"
              />
            )}

            {/* Reaction counts */}
            <div className="mx-4 flex items-center justify-between border-b py-2 text-sm dark:border-neutral-700">
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white">
                  <i style={{ fontSize: 10 }} className="fas fa-heart"></i>
                </span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white">
                  <i style={{ fontSize: 10 }} className="fas fa-thumbs-up"></i>
                </span>
                <span className="ml-1 text-gray-500 dark:text-gray-400">
                  {post.likes}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mx-2 flex gap-1 border-b py-1 dark:border-neutral-700">
              {[
                'fas fa-thumbs-up|Like',
                'fas fa-comment|Comment',
                'fas fa-share|Share',
              ].map((item) => {
                const [icon, label] = item.split('|');
                return (
                  <button
                    key={label}
                    className="flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-semibold text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-neutral-700"
                  >
                    <i className={icon}></i>
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Comments */}
            <div className="px-4 pb-6">
              {post.commentsData.length === 0 ? (
                <p className="mt-6 text-center text-sm text-gray-400">
                  No comments yet. Be the first!
                </p>
              ) : (
                post.commentsData.map((comment) => (
                  <CommentItem key={comment._id} comment={comment} />
                ))
              )}
            </div>
          </div>

          {/* Comment input — pinned to bottom */}
          <div className="flex-shrink-0 border-t px-3 py-3 dark:border-neutral-700">
            <div className="flex items-center gap-2">
              <img
                src="https://random.imagecdn.app/200/200"
                className="h-8 w-8 flex-shrink-0 rounded-full"
                alt="dp"
              />
              <div className="flex flex-1 items-center gap-2 rounded-full bg-gray-100 px-3 py-2 dark:bg-neutral-700">
                <div className="flex gap-2 text-gray-400">
                  <button className="hover:text-primary focus:outline-none">
                    <i className="far fa-smile"></i>
                  </button>
                  <button className="hover:text-primary focus:outline-none">
                    <i className="fas fa-image"></i>
                  </button>
                  <button className="text-xs font-bold hover:text-primary focus:outline-none">
                    GIF
                  </button>
                  <button className="hover:text-primary focus:outline-none">
                    <i className="fas fa-sticky-note"></i>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Comment as Saiful Islam Shihab"
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-500"
                />
                <button className="text-primary hover:opacity-80 focus:outline-none">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostModal;
