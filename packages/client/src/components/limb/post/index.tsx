import React from 'react';
import { IPost } from '../../../types/post';
import moment from 'moment';
interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = (props) => {
  const { post } = props;
  const { user } = post;
  return (
    <div className="w-full shadow h-auto bg-white rounded-md">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="w-10 h-10">
          <img src={user.dp} className="w-full h-full rounded-full" alt="dp" />
        </div>
        <div className="flex-grow flex flex-col">
          <p className="font-semibold text-sm text-gray-700">{user.fullname}</p>
          <span className="text-xs font-thin text-gray-400">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>
        <div className="w-8 h-8">
          <button className="w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      {post.caption ? (
        <div className="mb-1">
          <p className="text-gray-700 max-h-10 truncate px-3 text-sm">
            {post.caption}
          </p>
        </div>
      ) : null}
      {post.image ? (
        <div className="w-full h-76 max-h-100">
          <img
            src={post.image}
            alt="postimage"
            className="w-full h-76 max-h-100 object-cover"
          />
        </div>
      ) : null}

      <div className="w-full flex flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center">
            <div className="flex items-center">
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white">
                <i style={{ fontSize: 10 }} className="fas fa-heart"></i>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-primary text-white">
                <i style={{ fontSize: 10 }} className="fas fa-thumbs-up"></i>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500 text-white">
                <i style={{ fontSize: 10 }} className="fas fa-surprise"></i>
              </button>
              <div className="ml-1">
                <p>{post.likes}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button>{post.comments} Comments</button>
            <button>{post.shares} Shares</button>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm font-thin">
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <div>
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div>
              <p className="font-semibold">Like</p>
            </div>
          </button>
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <div>
              <i className="fas fa-comment"></i>
            </div>
            <div>
              <p className="font-semibold">Comment</p>
            </div>
          </button>
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <div>
              <i className="fas fa-share"></i>
            </div>
            <div>
              <p className="font-semibold">Share</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
