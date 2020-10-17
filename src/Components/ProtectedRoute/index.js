import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ exact, component, path }) =>  {
  const isAuth = useSelector(store => store.auth.loggedIn);
  const Component = component;

  return isAuth ? (
    <Route exact={exact} path={path} >
      <Component />
    </Route>
  ) : (
    <Redirect to="/login" />
  )
};

export default ProtectedRoute;
