import React from 'react';
import PostContainer from './PostContainer';
import Story from './Story';

const NewsFeedScreen = () => {
  return (
    <div className='mt-6 w-full h-full pb-5'>
      {/* Story Section */}
      <div className='w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer'>
        <div
          className='w-28 h-48 relative rounded-xl shadow '
          style={{ backgroundImage: `url('https://picsum.photos/400')` }}
        >
          <div
            className='w-full absolute flex justify-center'
            style={{ bottom: '13%' }}
          >
            <button className='focus:outline-none z-40 w-10 h-10 bg-blue-500 rounded-full border-4 border-white'>
              <i className='text-white fas fa-plus'></i>
            </button>
          </div>
          <div className='bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg '>
            <p className='text-gray-500 text-sm font-semibold'>Create Story</p>
          </div>
        </div>
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      {/* Create Post       */}
      <div className='mt-6 rounded-lg bg-white flex flex-col p-3 px-4'>
        <div className='flex items-center space-x-2 border-b pb-3 mb-2'>
          <div className='w-10 h-10'>
            <img
              src='https://picsum.photos/200'
              className='w-full h-full rounded-full'
              alt='dp'
            />
          </div>
          <button className='hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left pl-2 rounded-full h-10'>
            What's on your mind, Shihab?
          </button>
        </div>
        <div className='flex space-x-3'>
          <button className='flex-1 flex items-center h-10 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md'>
            <div>
              <i className='text-2xl fab fa-youtube text-red-400'></i>
            </div>
            <div>
              <p className='font-semibold text-gray-500'>Create Video</p>
            </div>
          </button>
          <button className='flex-1 flex items-center h-10 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md'>
            <div>
              <i className='text-2xl fas fa-images text-green-500'></i>
            </div>
            <div>
              <p className='font-semibold text-gray-500'>Photos/Video</p>
            </div>
          </button>
          <button className='flex-1 flex items-center h-10 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md'>
            <div>
              <i className='text-2xl far fa-smile text-yellow-500'></i>
            </div>
            <div>
              <p className='font-semibold text-gray-500'>Feeling/Activity</p>
            </div>
          </button>
        </div>
      </div>
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeedScreen;
