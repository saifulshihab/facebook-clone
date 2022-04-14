export type TPostView = 'gridView' | 'listView';

export interface IPost {
  _id: string;
  user: {
    _id: string;
    fullname: string;
    username: string;
    dp?: string;
  };
  caption?: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}
