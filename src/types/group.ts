export interface IGroup {
  _id: string;
  name: string;
  image: string;
  lastActive: string;
  isPinned?: boolean;
  members?: number;
}

export interface IGroupComment {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    dp?: string;
    isVerified?: boolean;
    isFollowing?: boolean;
  };
  text: string;
  likes: number;
  reactions?: string[];
  createdAt: Date;
  replyCount?: number;
  replies?: IGroupComment[];
}

export interface IGroupPost {
  _id: string;
  group: {
    _id: string;
    name: string;
    image: string;
    isPublic: boolean;
  };
  user: {
    _id: string;
    fullName: string;
    dp?: string;
    badge?: string;
  };
  content: string;
  image?: string;
  createdAt: Date;
  likes: number;
  likeReactions?: string[];
  commentsCount: number;
  sharesCount: number;
  comments?: IGroupComment[];
}
