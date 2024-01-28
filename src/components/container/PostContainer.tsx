import React from 'react';
import { postsData } from '../../database';
import { TPostView } from '../../types/post';
import Post from '../limb/post';

interface IProps {
  postsView?: TPostView;
}

const PostContainer: React.FC<IProps> = (props) => {
  const { postsView } = props;
  return (
    <div className="mt-4 w-full h-full">
      <div
        className={`grid ${
          postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
        {postsData.length ? (
          postsData.map((post, idx) => <Post key={idx} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  );
};

export default PostContainer;
