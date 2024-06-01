import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-4xl text-black dark:text-gray-200">
        <span className="font-bold">404</span> | Page Not Found
      </p>
      <Link to="/">
        <p className="mt-2 text-sm text-blue-600 underline">Go Home</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
