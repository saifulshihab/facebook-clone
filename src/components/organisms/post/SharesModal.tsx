import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import moment from 'moment';
import React from 'react';
import { IPost } from '../../../types/post';

interface IProps {
  post: IPost;
  isOpen: boolean;
  onClose: () => void;
}

const SharesModal: React.FC<IProps> = ({ post, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <DialogPanel className="flex h-full max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-neutral-800">
          {/* Header */}
          <div className="relative flex flex-shrink-0 items-center justify-center border-b px-4 py-3 dark:border-neutral-700">
            <DialogTitle className="text-base font-bold text-gray-900 dark:text-gray-100">
              People who shared this
            </DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* List */}
          <div className="fb-scrollbar min-h-0 flex-1 overflow-y-auto">
            {post.sharesData.length === 0 ? (
              <p className="mt-10 text-center text-sm text-gray-400">
                No one has shared this post yet.
              </p>
            ) : (
              post.sharesData.map((share, i) => (
                <div key={share._id}>
                  {i > 0 && (
                    <div className="mx-4 border-t dark:border-neutral-700" />
                  )}
                  <div className="p-4">
                    {/* User row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            share.user.dp ??
                            'https://random.imagecdn.app/200/200'
                          }
                          className="h-10 w-10 flex-shrink-0 rounded-full"
                          alt="dp"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {share.user.fullName}
                          </p>
                          <p className="text-xs text-gray-400">
                            {moment(share.sharedAt).fromNow()} ·{' '}
                            <i className="fas fa-globe-asia"></i>
                          </p>
                        </div>
                      </div>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-neutral-700">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>

                    {/* Optional caption */}
                    {share.caption && (
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        {share.caption}
                      </p>
                    )}

                    {/* Show Attachment */}
                    <button className="mt-3 w-full rounded-md py-2 text-sm font-semibold text-[#75B6FF] hover:bg-gray-50 focus:outline-none dark:hover:bg-neutral-700">
                      Show Attachment
                    </button>

                    {/* Action buttons */}
                    <div className="mt-2 flex gap-1">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-semibold text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-neutral-700">
                        <i className="fas fa-thumbs-up"></i>
                        Like
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-semibold text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-neutral-700">
                        <i className="fas fa-share"></i>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SharesModal;
