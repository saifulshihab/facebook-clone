import React from 'react';
import Navbar from '../limb/navbar';

const WatchPageLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full">
      <Navbar />
      <div>
        content goes here
        {children}
      </div>
    </div>
  );
};

export default WatchPageLayout;
