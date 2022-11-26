import React from 'react';

const MainContentContainer: React.FC = (props) => {
  const { children } = props;
  return (
    <div
      className=""
      style={{ marginTop: '3.5rem', minHeight: 'calc(100% - 4rem)' }}
    >
      {children}
    </div>
  );
};

export default MainContentContainer;
