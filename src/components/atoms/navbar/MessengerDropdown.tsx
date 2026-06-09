import React, { useState } from 'react';
import { chatsData } from '../../../lib/data';
import { IChat } from '../../../types/chat';

const META_AI_GRADIENT =
  'linear-gradient(135deg, #0064E0 0%, #0EA5E9 30%, #B44FE8 60%, #E9267F 100%)';

const tabs = ['All', 'Unread', 'Groups', 'Communities'];

function ChatItem({ chat }: { chat: IChat }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 hover:bg-[#3A3B3C] focus:outline-none">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {chat.user.isMetaAI ? (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full"
            style={{ background: META_AI_GRADIENT }}
          >
            <svg viewBox="0 0 36 36" width="22" height="22" fill="white">
              <path d="M18 6c-1.8 3-4 5.5-6 7.5 2 1.5 4.5 2.5 6 2.5s4-1 6-2.5C22 11.5 19.8 9 18 6z" />
              <path d="M10 20c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.4-.4-2.7-1-3.8-2 1.3-4.4 2.3-7 2.3s-5-.9-7-2.3C10.4 17.3 10 18.6 10 20z" />
            </svg>
          </div>
        ) : (
          <img
            src={chat.user.dp}
            alt={chat.user.fullName}
            className="h-11 w-11 rounded-full object-cover"
          />
        )}
        {chat.user.isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#242526] bg-green-500" />
        )}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1 text-left">
        <p className="truncate text-[15px] font-semibold text-white">
          {chat.user.fullName}
        </p>
        <div className="flex items-center gap-1">
          <p
            className={`truncate text-[13px] ${
              chat.isUnread ? 'font-semibold text-white' : 'text-gray-400'
            }`}
          >
            {chat.lastMessage}
          </p>
          <span className="flex-shrink-0 text-[12px] text-gray-400">
            · {chat.time}
          </span>
          {chat.hasReply && (
            <span className="flex-shrink-0 text-[12px] font-semibold text-[#0866FF]">
              · Reply?
            </span>
          )}
          {chat.hasFollowUp && (
            <span className="flex-shrink-0 text-[12px] font-semibold text-[#0866FF]">
              · Follow up?
            </span>
          )}
        </div>
      </div>

      {/* Right indicator */}
      <div className="flex flex-shrink-0 items-center">
        {chat.isUnread && (
          <span className="h-3 w-3 rounded-full bg-[#0866FF]" />
        )}
        {chat.isMuted && !chat.isUnread && (
          <i className="fas fa-bell-slash text-[13px] text-gray-500" />
        )}
        {chat.rightDp && !chat.isUnread && (
          <img
            src={chat.rightDp}
            alt=""
            className="h-5 w-5 rounded-full object-cover"
          />
        )}
      </div>
    </button>
  );
}

const MessengerDropdown: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="absolute right-0 top-12 w-[360px] rounded-2xl bg-[#242526] shadow-2xl shadow-black/60">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h2 className="text-2xl font-bold text-white">Chats</h2>
        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3B3C] text-white hover:bg-[#4E4F50] focus:outline-none">
            <i className="fas fa-th text-[14px]" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3B3C] text-white hover:bg-[#4E4F50] focus:outline-none">
            <i className="fas fa-expand-alt text-[14px]" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3B3C] text-white hover:bg-[#4E4F50] focus:outline-none">
            <i className="fas fa-edit text-[14px]" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-full bg-[#3A3B3C] px-3 py-2">
          <i className="fas fa-search text-[13px] text-gray-400" />
          <input
            placeholder="Search Messenger"
            className="flex-1 bg-transparent text-[14px] text-white placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-3 py-1 text-[14px] font-medium focus:outline-none ${
              activeTab === tab
                ? 'bg-[#D8EAFF] text-[#0866FF]'
                : 'bg-[#3A3B3C] text-white hover:bg-[#4E4F50]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chat list */}
      <div className="overflow-y-auto px-2" style={{ maxHeight: '80vh' }}>
        {chatsData.map((chat) => (
          <ChatItem key={chat._id} chat={chat} />
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#3A3B3C] px-4 py-3 text-center">
        <button className="text-[15px] font-semibold text-[#0866FF] hover:underline focus:outline-none">
          See all in Messenger
        </button>
      </div>
    </div>
  );
};

export default MessengerDropdown;
