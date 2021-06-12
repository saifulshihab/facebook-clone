import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-14 bg-white grid grid-cols-7'>
      <div className='col-span-2 flex items-center'>
        <div className='flex items-center ml-2'>
          <div className='h-10 text-blue-500'>
            <Link to='/'>
              <i className='fab fa-facebook' style={{ fontSize: 40 }}></i>
            </Link>
          </div>
          <div className='h-10'>
            <input
              placeholder='Search Facebook'
              className='bg-gray-100 rounded-full h-full focus:outline-none ml-2 px-3 pr-4'
            />
          </div>
        </div>
      </div>
      <div className='col-span-3 flex items-center justify-center space-x-2'>
        <div className='w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <div className='w-14 h-auto relative flex items-center justify-center'>
            <div className='text-gray-400'>
              <i className='text-2xl fas fa-home'></i>
            </div>
          </div>
        </div>
        <div className='w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <div className='w-14 h-auto relative flex items-center justify-center'>
            <div className='absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0'>
              9+
            </div>
            <div className='text-gray-400'>
              <i className='text-2xl fas fa-tv'></i>
            </div>
          </div>
        </div>
        <div className='w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <div className='w-14 h-auto relative flex items-center justify-center'>
            <div className='hidden absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0'>
              9+
            </div>
            <div className='text-gray-400'>
              <i className='text-2xl fas fa-store'></i>
            </div>
          </div>
        </div>
        <div className='w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <div className='w-14 h-auto relative flex items-center justify-center'>
            <div className='absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0'>
              2
            </div>
            <div className='text-gray-400'>
              <i className='text-2xl fas fa-users'></i>
            </div>
          </div>
        </div>
        <div className='w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100'>
          <div className='w-14 h-auto relative flex items-center justify-center'>
            <div className='absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0'>
              9+
            </div>
            <div className='text-gray-400'>
              <i className='text-2xl fas fa-gamepad'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2 flex items-center justify-end'>
        <div className='h-10 w-auto flex items-center space-x-2 pr-2'>
          <button className='h-10 px-2 flex space-x-1 items-center justify-center focus:outline-none hover:bg-gray-300 rounded-full'>
            <div className='h-8'>
              <img
                src='https://picsum.photos/200'
                className='w-8 h-8 rounded-full'
                alt='dp'
              />
            </div>
            <div className='h-8 flex items-center justify-content'>
              <p className='font-semibold text-sm'>Saiful</p>
            </div>
          </button>
          <button className='w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full'>
            <i className='fas fa-plus'></i>
          </button>
          <button className='w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full'>
            <i className='fab fa-facebook-messenger'></i>
          </button>
          <button className='w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full'>
            <i className='fas fa-bell'></i>
          </button>
          <button className='w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full'>
            <i className='fas fa-sort-down'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
