import React from 'react';
import CreatePostBox from '../../limb/post/CreatePostBox';
import PostContainer from '../../container/PostContainer';
import Story from '../../limb/story';
import { storiesData } from '../../../database';

const NewsFeed: React.FC = () => {
  return (
    <div className="mt-6 w-full h-full pb-5">
      {/* Story Section */}
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <div
          className="w-28 h-48 relative rounded-xl shadow "
          style={{
            backgroundImage: `url('https://random.imagecdn.app/500/400')`,
          }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-500 text-sm font-semibold">Create Story</p>
          </div>
        </div>
        {storiesData.length
          ? storiesData.map((story, idx) => <Story key={idx} story={story} />)
          : null}
      </div>
      {/* Create Post       */}
      <CreatePostBox />
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
