import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

MainLayout.displayName = 'MainLayout';
export default MainLayout;
