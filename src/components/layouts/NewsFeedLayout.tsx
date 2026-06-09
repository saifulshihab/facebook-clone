import React, { PropsWithChildren } from 'react';
import Navbar from '../atoms/navbar';
import MainContentContainer from '../common';
import LeftSidebar from '../organisms/newsfeed/LeftSidebar';
import RightSidebar from '../organisms/newsfeed/RightSidebar';

const NewsFeedLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="flex min-h-full w-full flex-col">
      <Navbar />
      <MainContentContainer>
        <div className="flex">
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>
          <div className="min-w-0 flex-1">{children}</div>
          <div className="hidden xl:block">
            <RightSidebar />
          </div>
        </div>
      </MainContentContainer>
    </div>
  );
};

export default NewsFeedLayout;
