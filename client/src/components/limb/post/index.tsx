import React from 'react';

const Post: React.FC = () => {
  return (
    <div className="w-full shadow h-auto bg-white my-2 rounded-md">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="w-10 h-10">
          <img
            src="https://picsum.photos/200"
            className="w-full h-full rounded-full"
            alt="dp"
          />
        </div>
        <div className="flex-grow flex flex-col">
          <p className="font-semibold text-sm text-gray-700">Saiful Islam</p>
          <span className="text-xs font-thin text-gray-400">2d</span>
        </div>
        <div className="w-8 h-8">
          <button className="w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div className="mb-1">
        <p className="text-gray-700 max-h-10 truncate px-3 text-sm">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
      </div>
      <div className="w-full h-76 max-h-80">
        <img
          src="https://picsum.photos/1080/1920"
          alt="postimage"
          className="w-full h-76 max-h-80"
        />
      </div>
      <div className="w-full flex flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center">
            <button className="flex items-center">
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
                <p>130K</p>
              </div>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button>1.2K Comments</button>
            <button>9 Shares</button>
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
