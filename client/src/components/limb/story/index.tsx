import React from 'react';

const Story: React.FC = () => {
  return (
    <div
      className="w-28 h-48 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
      style={{ backgroundImage: `url('https://picsum.photos/400')` }}
    >
      <div className="absolute">
        <img
          src="https://picsum.photos/400"
          className="w-10 h-10 rounded-full border-4 border-white"
          alt="story"
        />
      </div>
      <div className="absolute text-center" style={{ bottom: '5%' }}>
        <p className="text-white font-semibold">Saiful Islam</p>
      </div>
    </div>
  );
};

export default Story;
