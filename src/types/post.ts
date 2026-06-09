export type TPostView = 'gridView' | 'listView';

export interface IShare {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    dp?: string;
  };
  caption?: string;
  sharedAt: Date;
}

export interface IComment {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    dp?: string;
  };
  text: string;
  likes: number;
  reactions: string[];
  createdAt: Date;
  replies?: IComment[];
}

export interface IPost {
  _id: string;
  user: {
    _id: string;
    fullName: string;
    username: string;
    dp?: string;
  };
  caption?: string;
  image?: string;
  likes: number;
  comments: number;
  commentsData: IComment[];
  shares: number;
  sharesData: IShare[];
  createdAt: Date;
  updatedAt: Date;
}
