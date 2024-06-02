import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathName = location?.pathname.split('/')[1];
  return (
    <div className="fixed z-50 grid h-14 w-full grid-cols-7 gap-4 bg-white shadow-sm dark:bg-[#242526]">
      <div className="col-span-2 flex items-center">
        <div className="ml-2 flex items-center">
          <div className="h-10 text-primary">
            <Link to="/">
              <i className="fab fa-facebook text-[2.5rem]"></i>
            </Link>
          </div>

          <div className="h-10">
            <input
              placeholder="Search Facebook"
              className="dark:placeholder:text-gra ml-2 h-full rounded-full bg-gray-100 px-3 pr-4 placeholder:text-neutral-400 focus:outline-none dark:bg-neutral-700"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-center space-x-2">
        <Link to="/" id="home">
          <div className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
            <div className="relative flex h-auto w-14 items-center justify-center">
              <div
                className={`${
                  pathName === '' || undefined
                    ? 'text-primary'
                    : 'text-gray-400'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                  style={{ color: 'var(--secondary-icon)' }}
                >
                  0
                  <path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Tooltip place="bottom" anchorSelect="#home" content="Home" />
        <Link to="/watch" id="watch">
          <div className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
            <div className="relative flex h-auto w-14 items-center justify-center">
              <div className="absolute right-0 top-0 rounded-lg bg-red-500 px-1 text-xs font-bold text-white">
                9+
              </div>
              <div
                className={`${
                  pathName === 'watch' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                  style={{ color: 'var(--secondary-icon)' }}
                >
                  <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
                  <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Tooltip place="bottom" anchorSelect="#watch" content="Video" />
        <Link to="/marketplace" id="marketplace">
          <div className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
            <div className="relative flex h-auto w-14 items-center justify-center">
              <div
                className={`${
                  pathName === 'marketplace' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                  style={{ color: 'var(--secondary-icon)' }}
                >
                  <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Tooltip
          place="bottom"
          anchorSelect="#marketplace"
          content="Marketplace"
        />
        <Link to="/groups" id="groups">
          <div className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
            <div className="relative flex h-auto w-14 items-center justify-center">
              <div
                className={`${
                  pathName === 'groups' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                  style={{ color: 'var(--secondary-icon)' }}
                >
                  <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Tooltip place="bottom" anchorSelect="#groups" content="Groups" />
        <Link to="/gaming" id="gaming">
          <div className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
            <div className="relative flex h-auto w-14 items-center justify-center">
              <div
                className={`${
                  pathName === 'gaming' ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                  style={{ color: 'var(--secondary-icon)' }}
                >
                  <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
                  <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Tooltip place="bottom" anchorSelect="#gaming" content="Gaming" />
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <div className="flex h-10 w-auto items-center space-x-2 pr-2">
          <Link to="/profile">
            <button className="flex h-10 items-center justify-center space-x-1 rounded-full px-2 text-black hover:bg-gray-300 focus:outline-none dark:text-gray-200 dark:hover:bg-neutral-700">
              <div className="h-8">
                <img
                  src="https://random.imagecdn.app/200/200"
                  className="h-8 w-8 rounded-full"
                  alt="dp"
                />
              </div>
              <div className="justify-content flex h-8 items-center">
                <p className="text-sm font-semibold">Saiful</p>
              </div>
            </button>
          </Link>
          <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-neutral-600 focus:outline-none dark:bg-neutral-700 dark:text-gray-200">
            <i className="fas fa-plus"></i>
          </button>
          <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-neutral-600 focus:outline-none dark:bg-neutral-700 dark:text-gray-200">
            <i className="fab fa-facebook-messenger"></i>
          </button>
          <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-neutral-600 focus:outline-none dark:bg-neutral-700 dark:text-gray-200">
            <i className="fas fa-bell"></i>
          </button>
          <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-neutral-600 focus:outline-none dark:bg-neutral-700 dark:text-gray-200">
            <i className="fas fa-sort-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
