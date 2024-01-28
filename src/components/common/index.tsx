import React, { PropsWithChildren } from 'react';

const MainContentContainer: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className="mt-14 min-h-[calc(100%-4rem)]">{children}</div>;
};

export default MainContentContainer;
