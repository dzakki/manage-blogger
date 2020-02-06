import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute(props) {
  const user = useSelector(state => state.user);

  return (
    <Route {...props}>
      {
        user.isLogged
          ? props.children
          : <Redirect to={{
                pathname: "/"
            }}
          />
      }
    </Route>
  );
};