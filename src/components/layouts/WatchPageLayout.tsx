import React, { PropsWithChildren } from 'react';
import Navbar from '../atoms/navbar';
import MainContentContainer from '../common';

const WatchPageLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      <MainContentContainer>{children}</MainContentContainer>
    </div>
  );
};

export default WatchPageLayout;
