import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const MainContentContainer: React.FC<IProps> = (props) => {
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
