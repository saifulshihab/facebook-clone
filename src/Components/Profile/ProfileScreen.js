import React from 'react';

const ProfileScreen = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-auto shadow bg-white'>
        <div className='max-w-6xl h-full mx-auto bg-white mt-2'>
          <div
            className='h-96 max-h-96 w-full rounded-lg relative'
            style={{
              backgroundImage: `url('https://picsum.photos/720')`,
            }}
          >
            <div
              className='absolute  w-full flex items-center justify-center'
              style={{ bottom: '-15px' }}
            >
              <div className='w-44 h-44 rounded-full bg-gray-300 border-4 border-white'>
                <img
                  className='w-full h-full rounded-full'
                  src='https://picsum.photos/200'
                  alt='dp'
                />
              </div>
              <div className='absolute' style={{ bottom: 30, right: 30 }}>
                <button className='focus:outline-none px-3 py-2 hover:bg-gray-50 font-semibold bg-white rounded-md'>
                  <i className='fas fa-camera mr-2'></i>Edit Cover Photo
                </button>
              </div>
            </div>
          </div>
          <div className='max-w-5xl h-full mx-auto'>
            <div className='flex flex-col space-y-2 mt-3 items-center justify-center pb-3 border-b-2'>
              <p className='text-4xl font-bold'>Saiful Islam Shihab</p>
              <p className='text-sm text-gray-500'>I am Software Engineer</p>
            </div>
            <div className='mt-1 flex items-center justify-between'>
              <div className='flex mb-2 items-center space-x-2'>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  Posts
                </button>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  About
                </button>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  Friends
                </button>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  Photos
                </button>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  Story Archrive
                </button>
                <button className='py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none'>
                  Videos
                </button>
              </div>
              <div className='flex items-center space-x-2'>
                <button className='px-3 py-1.5 rounded-md bg-blue-500 text-white font-semibold focus:outline-none'>
                  <i className='fas fa-plus  mr-2'></i>Add to Story
                </button>
                <button className='px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md font-semibold focus:outline-none'>
                  <i className='fas fa-pen mr-2'></i>Edit Profile
                </button>
                <button className='px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none'>
                  <i className='fas fa-ellipsis-h'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* After bio content */}
      <div className='max-w-6xl h-full mx-auto mt-2'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-2'>
            <div className='bg-white rounded-lg p-3 text-sm text-gray-600'>
              <div className='mb-2 '>
                <p className='font-bold text-xl text-gray-800'>Intro</p>
              </div>
              <div className='flex flex-col space-y-3'>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fas fa-briefcase'></i>
                  </span>
                  <p>
                    Full Stack Web Developer at{' '}
                    <span className='font-semibold'>Fiverr</span>
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fas fa-graduation-cap'></i>
                  </span>
                  <p>
                    Studiend B.Sc in SWE at{' '}
                    <span className='font-semibold'>
                      Daffodil International University
                    </span>
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fas fa-home'></i>
                  </span>
                  <p>
                    Lives in <span className='font-semibold'>Dhaka</span>
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fas fa-map-marker-alt'></i>
                  </span>
                  <p>
                    From{' '}
                    <span className='font-semibold'>
                      Chandpur, Chittagong, Bangladesh
                    </span>
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fas fa-heart'></i>
                  </span>
                  <p>
                    <span className='font-semibold'>Single</span>
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fab fa-facebook'></i>
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={'https://facebook.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fab fa-instagram'></i>
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={'https://instagram.com/_shiha6'}
                  >
                    <p>_shiha6</p>
                  </a>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fab fa-twitter'></i>
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={'https://twitter.com/ShihabSWE'}
                  >
                    <p>ShihabSWE</p>
                  </a>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fab fa-github'></i>
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={'https://github.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className='flex items-center space-x-2'>
                  <span>
                    <i className='fab fa-behance'></i>
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={'https://www.behance.net/saifulis1am'}
                  >
                    <p>saifulis1am</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='w-full mb-2 rounded-lg bg-white flex flex-col p-3 px-4'>
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
                    <p className='font-semibold text-gray-500'>
                      Feeling/Activity
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
