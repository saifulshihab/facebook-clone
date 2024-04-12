import React, { useState } from 'react';
import CreatePostBox from '../../components/atoms/post/CreatePostBox';
import PostContainer from '../../components/container/PostContainer';
import { TPostView } from '../../types/post';

const ProfilePage: React.FC = () => {
  const [postsView, setPostsView] = useState<TPostView>('listView');
  return (
    <div className="w-full h-full">
      <div className="w-full h-auto shadow bg-white rounded-md">
        <div className="max-w-6xl h-full mx-auto bg-white">
          <div
            className="h-[28.75rem] max-h-[28.75rem] w-full rounded-lg relative"
            style={{
              backgroundImage: `url('https://random.imagecdn.app/1920/1080')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute w-full flex items-center justify-center"
              style={{ bottom: '-15px' }}
            >
              <div className="absolute bottom-[30px] right-[30px]">
                <button className="focus:outline-none px-3 py-2 hover:bg-gray-50 font-semibold bg-white rounded-md text-sm">
                  <i className="fas fa-camera mr-2"></i>Edit Cover Photo
                </button>
              </div>
            </div>
          </div>
          <div className="h-full mx-auto px-10">
            <div className="flex gap-5 items-end pb-5 border-b">
              <div className="w-[10.25rem] h-[10.25rem] -mt-8 z-10">
                <img
                  className="w-full h-full border-4 border-primary rounded-full"
                  src="https://random.imagecdn.app/250/250"
                  alt="dp"
                />
              </div>
              <div className="flex-1 pb-2 flex-col">
                <p className="text-[2rem] font-bold">Saiful Islam Shihab</p>
                <a className="text-sm text-gray-600 font-semibold hover:underline cursor-pointer">
                  528 friends
                </a>
                <div className="w-full flex items-center justify-between">
                  <div className="mt-2 flex items-center">
                    <img
                      className="rounded-full border-2 border-white cursor-pointer"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-2"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-4"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-6"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-8"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-10"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-12"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                    <img
                      className="rounded-full border-2 border-white cursor-pointer -translate-x-14"
                      alt="friend"
                      src="https://random.imagecdn.app/32/32"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1.5 rounded-md bg-primary text-sm hover:bg-blue-600 text-white font-semibold focus:outline-none">
                      <i className="fas fa-plus-circle  mr-2"></i>Add to Story
                    </button>
                    <button className="px-3 py-1.5 bg-gray-200 text-sm hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                      <i className="fas fa-pen mr-2"></i>Edit Profile
                    </button>
                    <button className="px-3 py-1.5 rounded-md bg-gray-100 text-sm hover:bg-gray-200 font-semibold focus:outline-none">
                      <i className="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex mb-2 items-center space-x-2">
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Posts
                </button>
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  About
                </button>
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Friends
                </button>
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Photos
                </button>
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Story Archrive
                </button>
                <button className="py-3 px-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Videos
                </button>
              </div>
              <button className="px-3 py-1.5 rounded-md bg-gray-100 text-sm hover:bg-gray-200 font-semibold focus:outline-none">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* After bio content */}
      <div className="max-w-6xl h-full mx-auto my-3">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-4 col-span-2">
            <div className="flex flex-col gap-4 bg-white rounded-lg p-3 text-gray-600 shadow">
              <p className="font-bold text-xl text-gray-800">Intro</p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <p className="text-sm">Silence among noise</p>
                  <a
                    href="https://saiful-islam.vercel.app"
                    target="__blank"
                    rel="noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    https://saiful-islam.vercel.app
                  </a>
                </div>
                <button className="w-full px-3 py-1.5 rounded-md bg-gray-100 text-sm hover:bg-gray-200 font-semibold focus:outline-none">
                  Edit bio
                </button>
              </div>
              <div className="flex flex-col text-sm space-y-4">
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-briefcase text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <p>
                    Full Stack Web Developer at{' '}
                    <span className="font-semibold">Fiverr</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-graduation-cap text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <p>
                    Studied B.Sc in SWE at{' '}
                    <span className="font-semibold">
                      Daffodil International University
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-home text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <p>
                    Lives in <span className="font-semibold">Dhaka</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-map-marker-alt text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <p>
                    From{' '}
                    <span className="font-semibold">
                      Chandpur, Chittagong, Bangladesh
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-heart text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <p>
                    <span className="font-semibold">Single</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-facebook text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <a
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://facebook.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-instagram text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <a
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://instagram.com/_shiha6'}
                  >
                    <p>_shiha6</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-twitter text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <a
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://twitter.com/ShihabSWE'}
                  >
                    <p>ShihabSWE</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-github text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <a
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://github.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-behance text-gray-400 text-[1.25rem]"></i>
                  </span>
                  <a
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://www.behance.net/saifulis1am'}
                  >
                    <p>saifulis1am</p>
                  </a>
                </div>
              </div>

              <div>
                <button className="w-full px-3 py-1.5 rounded-md bg-gray-100 text-sm hover:bg-gray-200 font-semibold focus:outline-none">
                  Edit details
                </button>
              </div>

              <div className="flex items-center gap-3">
                <img
                  className="rounded-lg cursor-pointer"
                  alt="featured"
                  src="https://random.imagecdn.app/120/215"
                />
                <img
                  className="rounded-lg cursor-pointer"
                  alt="featured"
                  src="https://random.imagecdn.app/120/215"
                />
                <img
                  className="rounded-lg cursor-pointer"
                  alt="featured"
                  src="https://random.imagecdn.app/120/215"
                />
              </div>

              <div>
                <button className="w-full px-3 py-1.5 rounded-md bg-gray-100 text-sm hover:bg-gray-200 font-semibold focus:outline-none">
                  Edit featured
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-3 text-gray-600 shadow">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl text-gray-800">Photos</p>
                <a className="text-sm text-primary cursor-pointer hover:underline">
                  See all photos
                </a>
              </div>
              <div className="grid grid-cols-3 rounded-md overflow-hidden gap-1">
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/125"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/124"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/123"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/122"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/121"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/120"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/119"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/118"
                />
                <img
                  className="w-full"
                  alt="photo"
                  src="https://random.imagecdn.app/125/117"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-3 text-gray-600 shadow">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-800">Friends</p>
                  <p>528 friends</p>
                </div>
                <a className="text-sm text-primary cursor-pointer hover:underline">
                  See all friends
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/125"
                  />
                  <p className="mt-2 text-sm text-black">Friend 1</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/126"
                  />
                  <p className="mt-2 text-sm text-black">Friend 2</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/127"
                  />
                  <p className="mt-2 text-sm text-black">Friend 3</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/128"
                  />
                  <p className="mt-2 text-sm text-black">Friend 4</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/129"
                  />
                  <p className="mt-2 text-sm text-black">Friend 5</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/130"
                  />
                  <p className="mt-2 text-sm text-black">Friend 6</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/131"
                  />
                  <p className="mt-2 text-sm text-black">Friend 7</p>
                </div>
                <div>
                  <img
                    className="w-full rounded-md"
                    alt="photo"
                    src="https://random.imagecdn.app/125/132"
                  />
                  <p className="mt-2 text-sm text-black">Friend 8</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {/* Create post */}
            <CreatePostBox />
            {/* post filter box */}
            <div className="bg-white rounded-md shadow p-2 mt-4 px-3 text-sm">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <p className="text-xl text-gray-700 font-bold">Posts</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-sliders-h mr-2"></i>Filters
                  </button>
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-cog mr-2"></i>Manage Posts
                  </button>
                </div>
              </div>
              <div className="flex space-x-3 text-gray-500 mt-1 -mb-1">
                <button
                  className={`font-semibold flex-1 h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md ${
                    postsView === 'listView' ? 'bg-gray-200' : undefined
                  }`}
                  onClick={() => setPostsView('listView')}
                >
                  <i className="fas fa-bars mr-2"></i>List View
                </button>
                <button
                  className={`font-semibold flex-1 h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md  ${
                    postsView === 'gridView' ? 'bg-gray-200' : undefined
                  }`}
                  onClick={() => setPostsView('gridView')}
                >
                  <i className="fas fa-th-large mr-2"></i>Grid View
                </button>
              </div>
            </div>

            {/* user posts */}
            <PostContainer postsView={postsView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
