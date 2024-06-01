import moment from 'moment';
import React from 'react';
import { IPost } from '../../../types/post';
interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = (props) => {
  const { post } = props;
  const { user } = post;
  return (
    <div className="h-auto w-full rounded-md bg-white shadow dark:bg-neutral-800">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="h-10 w-10">
          <img src={user.dp} className="h-full w-full rounded-full" alt="dp" />
        </div>
        <div className="flex flex-grow flex-col">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {user.fullName}
          </p>
          <span className="text-xs font-thin text-gray-400">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>
        <div className="h-8 w-8">
          <button className="h-full w-full rounded-full text-gray-400 hover:bg-gray-100 focus:outline-none dark:text-gray-500 dark:hover:bg-neutral-700">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      {post.caption ? (
        <div className="mb-1">
          <p className="max-h-10 truncate px-3 text-sm text-gray-700 dark:text-gray-300">
            {post.caption}
          </p>
        </div>
      ) : null}
      {post.image ? (
        <div className="h-76 max-h-100 w-full">
          <img
            src={post.image}
            alt="postImage"
            className="h-76 max-h-100 w-full object-cover"
          />
        </div>
      ) : null}

      <div className="flex w-full flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 text-sm dark:border-neutral-700">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white focus:outline-none">
                <i style={{ fontSize: 10 }} className="fas fa-heart"></i>
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white focus:outline-none">
                <i style={{ fontSize: 10 }} className="fas fa-thumbs-up"></i>
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-white focus:outline-none">
                <i style={{ fontSize: 10 }} className="fas fa-surprise"></i>
              </span>
              <div className="ml-1">
                <p className="text-gray-500 dark:text-gray-300">{post.likes}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-500 dark:text-gray-300">
              {post.comments} Comments
            </button>
            <button className="text-gray-500 dark:text-gray-300">
              {post.shares} Shares
            </button>
          </div>
        </div>
        <div className="flex space-x-3 text-sm font-thin text-gray-500">
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <div>
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div>
              <p className="font-semibold">Like</p>
            </div>
          </button>
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <div>
              <i className="fas fa-comment"></i>
            </div>
            <div>
              <p className="font-semibold">Comment</p>
            </div>
          </button>
          <button className="flex h-8 flex-1 items-center justify-center space-x-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
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
