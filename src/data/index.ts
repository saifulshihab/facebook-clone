import { IPost } from '../types/post';
import { IStory } from '../types/user';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'shihab',
      fullName: 'Saiful Islam Shihab',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'This is post caption',
    image: 'https://random.imagecdn.app/1920/1081',
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
      fullName: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'This is post caption',
    image: 'https://random.imagecdn.app/1920/1070',
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
      fullName: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'This is post caption',
    image: 'https://random.imagecdn.app/1920/1060',
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
      fullName: 'Saiful Islam Shihab',
      username: 'shihab',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'This is post caption',
    image: 'https://random.imagecdn.app/1920/1050',
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
    image: 'https://random.imagecdn.app/200/300',
    user: {
      _id: '1',
      fullName: 'Saiful Islam',
      dp: 'https://random.imagecdn.app/100/100',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    image: 'https://random.imagecdn.app/200/400',
    user: {
      _id: '1',
      fullName: 'Shihab',
      dp: 'https://random.imagecdn.app/200/200',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://random.imagecdn.app/200/700',
    user: {
      _id: '1',
      fullName: 'Shi',
      dp: 'https://random.imagecdn.app/200/150',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://random.imagecdn.app/200/250',
    user: {
      _id: '1',
      fullName: 'Hab',
      dp: 'https://random.imagecdn.app/200/200',
    },
    createdAt: new Date(),
  },
];
