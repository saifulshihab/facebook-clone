export interface IReel {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    username: string;
    dp?: string;
    isVerified?: boolean;
    isFollowing?: boolean;
  };
  videoUrl: string;
  poster?: string;
  caption: string;
  audio: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
}
