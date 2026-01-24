import { Analytics } from '@vercel/analytics/next';
import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Analytics />
    </div>
  );
};

MainLayout.displayName = 'MainLayout';
export default MainLayout;
