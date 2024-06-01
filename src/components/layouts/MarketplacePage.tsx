import React, { PropsWithChildren } from 'react';
import Navbar from '../atoms/navbar';
import MainContentContainer from '../common';

const MarketplacePageLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      <MainContentContainer>{children}</MainContentContainer>
    </div>
  );
};

export default MarketplacePageLayout;
