import { IPost } from '../types/post';
import { IStory } from '../types/user';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'shihab',
      fullname: 'Saiful Islam Shihab',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1080',
    likes: 129,
    comments: 5,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    user: {
      _id: '1',
      fullname: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1070',
    likes: 798,
    comments: 52,
    shares: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    user: {
      _id: '1',
      fullname: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1060',
    likes: 456,
    comments: 15,
    shares: 80,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '4',
    user: {
      _id: '1',
      fullname: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1050',
    likes: 29,
    comments: 1,
    shares: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const storiesData: IStory[] = [
  {
    _id: '1',
    image: 'https://picsum.photos/500',
    user: {
      _id: '1',
      fullname: 'Saiful Islam',
      dp: 'https://picsum.photos/100',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    image: 'https://picsum.photos/600',
    user: {
      _id: '1',
      fullname: 'Shihab',
      dp: 'https://picsum.photos/200',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://picsum.photos/700',
    user: {
      _id: '1',
      fullname: 'Ovy Bin',
      dp: 'https://picsum.photos/400',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://picsum.photos/800',
    user: {
      _id: '1',
      fullname: 'Antor',
      dp: 'https://picsum.photos/300',
    },
    createdAt: new Date(),
  },
];
