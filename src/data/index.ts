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
      _id: '2',
      fullName: 'Shihab',
      dp: 'https://random.imagecdn.app/200/200',
    },
    createdAt: new Date(),
  },
  {
    _id: '3',
    image: 'https://random.imagecdn.app/201/300',
    user: {
      _id: '3',
      fullName: 'Rakib Hasan',
      dp: 'https://random.imagecdn.app/201/201',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://random.imagecdn.app/202/300',
    user: {
      _id: '4',
      fullName: 'Nadia Islam',
      dp: 'https://random.imagecdn.app/202/202',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://random.imagecdn.app/203/300',
    user: {
      _id: '5',
      fullName: 'Tanvir Ahmed',
      dp: 'https://random.imagecdn.app/203/203',
    },
    createdAt: new Date(),
  },
  {
    _id: '6',
    image: 'https://random.imagecdn.app/204/300',
    user: {
      _id: '6',
      fullName: 'Sadia Rahman',
      dp: 'https://random.imagecdn.app/204/204',
    },
    createdAt: new Date(),
  },
  {
    _id: '7',
    image: 'https://random.imagecdn.app/205/300',
    user: {
      _id: '7',
      fullName: 'Faisal Hossain',
      dp: 'https://random.imagecdn.app/205/205',
    },
    createdAt: new Date(),
  },
  {
    _id: '8',
    image: 'https://random.imagecdn.app/206/300',
    user: {
      _id: '8',
      fullName: 'Mim Akter',
      dp: 'https://random.imagecdn.app/206/206',
    },
    createdAt: new Date(),
  },
];
