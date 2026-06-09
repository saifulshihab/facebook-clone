import React from 'react';
import StoryList from '../../components/organisms/newsfeed/StoryList';
import CreatePostBox from '../../components/organisms/post/CreatePostBox';
import PostContainer from '../../components/organisms/post/PostContainer';

const NewsFeedPage: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[42.5rem] px-2 sm:px-3 xl:px-0">
      <div className="mt-6 h-full w-full pb-5">
        <StoryList />
        <CreatePostBox />
        <PostContainer />
      </div>
    </div>
  );
};

export default NewsFeedPage;
