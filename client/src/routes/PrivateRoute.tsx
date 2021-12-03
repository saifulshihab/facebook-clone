import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AppState } from '../redux/store';

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
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

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
