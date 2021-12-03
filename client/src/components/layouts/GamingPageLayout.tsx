import React from 'react';
import Navbar from '../limb/navbar';

const GamingPageLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default GamingPageLayout;
