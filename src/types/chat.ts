export interface IChat {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    dp: string;
    isOnline?: boolean;
    isGroup?: boolean;
    isMetaAI?: boolean;
  };
  lastMessage: string;
  time: string;
  isUnread?: boolean;
  isMuted?: boolean;
  hasReply?: boolean;
  hasFollowUp?: boolean;
  rightDp?: string;
}
