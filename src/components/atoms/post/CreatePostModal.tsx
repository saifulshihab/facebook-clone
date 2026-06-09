import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React, { useState } from 'react';
import Button from '../button/Button';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const bgColors: { key: string; style: React.CSSProperties }[] = [
  { key: 'purple', style: { background: '#7c3aed' } },
  { key: 'red', style: { background: '#ef4444' } },
  { key: 'black', style: { background: '#111827' } },
  { key: 'pink-grad', style: { background: 'linear-gradient(135deg,#a855f7,#ec4899)' } },
  { key: 'indigo', style: { background: '#4338ca' } },
  { key: 'orange-grad', style: { background: 'linear-gradient(135deg,#facc15,#f97316)' } },
  { key: 'gray', style: { background: '#9ca3af' } },
  { key: 'galaxy', style: { background: 'linear-gradient(135deg,#1e1b4b,#4c1d95)' } },
];

const CreatePostModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const activeBg = bgColors.find((c) => c.key === selectedKey);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-xl bg-white shadow-2xl dark:bg-[#242526]">
          {/* Header */}
          <div className="relative flex items-center justify-center border-b px-4 py-3 dark:border-neutral-700">
            <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Create post
            </DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 px-4 pt-4">
            <img
              src="https://random.imagecdn.app/200/200"
              className="h-10 w-10 rounded-full"
              alt="dp"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Saiful Islam Shihab
              </p>
              <button className="mt-1 flex items-center gap-1 rounded-md bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500">
                <i className="fas fa-user-friends text-[10px]"></i>
                Friends
                <i className="fas fa-caret-down text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* Textarea */}
          <div
            className="mx-4 mt-3 rounded-lg p-2 transition-all"
            style={activeBg?.style}
          >
            <textarea
              rows={4}
              placeholder="What's on your mind, Saiful?"
              className={`w-full resize-none bg-transparent text-lg focus:outline-none ${
                activeBg
                  ? 'text-center font-bold text-white placeholder:text-white/80'
                  : 'text-gray-800 placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500'
              }`}
            />
          </div>

          {/* Background color picker */}
          <div className="mx-4 mt-2 flex items-center gap-2 overflow-x-auto pb-1">
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500">
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            {/* No background */}
            <button
              onClick={() => setSelectedKey(null)}
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white focus:outline-none dark:bg-neutral-700 ${
                selectedKey === null
                  ? 'border-primary'
                  : 'border-gray-300 dark:border-neutral-500'
              }`}
            >
              <i className="far fa-clock text-xs text-gray-500 dark:text-gray-400"></i>
            </button>
            {/* Color swatches */}
            {bgColors.map((color) => (
              <button
                key={color.key}
                onClick={() => setSelectedKey(color.key)}
                style={color.style}
                className={`h-8 w-8 flex-shrink-0 rounded-full border-2 focus:outline-none ${
                  selectedKey === color.key
                    ? 'border-primary'
                    : 'border-transparent'
                }`}
              />
            ))}
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500">
              <i className="fas fa-th text-xs"></i>
            </button>
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none dark:bg-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-500">
              <i className="far fa-smile text-xs"></i>
            </button>
          </div>

          {/* Add to your post */}
          <div className="mx-4 mt-3 flex items-center justify-between rounded-lg border px-4 py-2 dark:border-neutral-600">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Add to your post
            </p>
            <div className="flex items-center gap-1">
              <button
                title="Photo/Video"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <i className="fas fa-images text-xl text-green-500"></i>
              </button>
              <button
                title="Tag people"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <i className="fas fa-user-tag text-xl text-blue-500"></i>
              </button>
              <button
                title="Feeling/Activity"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <i className="far fa-smile text-xl text-yellow-400"></i>
              </button>
              <button
                title="Check in"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <i className="fas fa-map-marker-alt text-xl text-red-500"></i>
              </button>
              <button
                title="GIF"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <span className="rounded border border-green-500 px-0.5 text-xs font-bold text-green-500">
                  GIF
                </span>
              </button>
              <button
                title="More"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700"
              >
                <i className="fas fa-ellipsis-h text-gray-500 dark:text-gray-400"></i>
              </button>
            </div>
          </div>

          {/* Post button */}
          <div className="px-4 py-3">
            <Button size="large" block>
              Post
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreatePostModal;
