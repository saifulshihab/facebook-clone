import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IProps {
  component: any;
  layout: any;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === null ? null : isAuthenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export { PrivateRoute };
