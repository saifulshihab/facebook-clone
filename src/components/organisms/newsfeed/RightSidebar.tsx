import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="sticky top-[56px] h-[calc(100vh-56px)] w-[22.5rem] overflow-y-auto px-2 py-3 pr-2">
      <div className="mb-2 w-full border-b-2 border-gray-300 pb-2 dark:border-neutral-700">
        <p className="mb-2 font-semibold text-black dark:text-gray-200">
          Your Pages
        </p>
        <li className="justify-content -ml-2 mb-2 flex h-12 cursor-pointer items-center space-x-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-neutral-800">
          <div>
            <img
              className="h-8 w-8 rounded-full"
              src="https://random.imagecdn.app/32/32"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-black dark:text-gray-200">
              Night Fury Gaming
            </p>
          </div>
        </li>
        <ul className="text-sm text-gray-500 dark:text-gray-200">
          <li className="justify-content ark:hover:bg-neutral-800 mb-2 flex h-8 cursor-pointer items-center space-x-3 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-neutral-800">
            <div>
              <i className="fas fa-bell"></i>
            </div>
            <div>
              <p className="text-xs">Notification</p>
            </div>
          </li>
          <li className="justify-content ark:hover:bg-neutral-800 flex h-8 cursor-pointer items-center space-x-3 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-neutral-800">
            <div>
              <i className="fas fa-bullhorn"></i>
            </div>
            <div>
              <p className="text-xs">Create promotion</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-black dark:text-gray-200">
              Contacts
            </p>
          </div>
          <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-300">
            <button className="h-8 w-8 rounded-full hover:bg-gray-200 focus:outline-none dark:hover:bg-neutral-800">
              <i className="fab fa-youtube"></i>
            </button>
            <button className="h-8 w-8 rounded-full hover:bg-gray-200 focus:outline-none dark:hover:bg-neutral-800">
              <i className="fas fa-search"></i>
            </button>
            <button className="h-8 w-8 rounded-full hover:bg-gray-200 focus:outline-none dark:hover:bg-neutral-800">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <div className="-ml-2">
          <ul>
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <li
                  key={idx}
                  className="justify-content mb-2 flex h-12 cursor-pointer items-center space-x-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-neutral-800"
                >
                  <div>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`https://random.imagecdn.app/200/${200 + idx}`}
                      alt="user"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-200">
                      Saiful Islam Shihab
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
