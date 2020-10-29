import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import Proptypes from 'prop-types';

const HostRoute = ({ exact, component, path }) => {
  const isHost = useSelector(store => store.auth.user.host);
  const Component = component;

  return isHost ? (
    <Route exact={exact} path={path}>
      <Component />
    </Route>
  ) : (
    <Redirect to="/" />
  );
};

HostRoute.propTypes = {
  exact: Proptypes.bool.isRequired,
  component: Proptypes.func.isRequired,
  path: Proptypes.string.isRequired,
};

export default HostRoute;
