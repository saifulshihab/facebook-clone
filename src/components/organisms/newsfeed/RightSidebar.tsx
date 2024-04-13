import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="w-[22.5rem] h-[calc(100vh-56px)] sticky top-[56px] overflow-y-auto  py-3 pr-2">
      <div className="w-full border-b-2 pb-2 mb-2 border-gray-300">
        <p className="font-semibold mb-2">Your Pages</p>
        <li className="h-12 mb-2 flex items-center -ml-2 justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://random.imagecdn.app/32/32"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Night Fury Gaming</p>
          </div>
        </li>
        <ul className="text-gray-500 text-sm">
          <li className="h-8 mb-2 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
            <div>
              <i className="fas fa-bell"></i>
            </div>
            <div>
              <p className="text-xs">Notification</p>
            </div>
          </li>
          <li className="h-8 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
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
            <p className="font-semibold">Contacts</p>
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fab fa-youtube"></i>
            </button>
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fas fa-search"></i>
            </button>
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <div className="-ml-2">
          <ul className="w-full text-gray-600">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <li
                  key={idx}
                  className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200"
                >
                  <div>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`https://random.imagecdn.app/200/${200 + idx}`}
                      alt="user"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Saiful Islam Shihab</p>
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
