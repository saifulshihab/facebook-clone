import React from 'react';
import Post from './Post';

const PostContainer: React.FC = () => {
  return (
    <div className="mt-4 w-full h-full">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostContainer;
