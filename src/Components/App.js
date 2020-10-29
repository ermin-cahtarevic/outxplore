import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './Main';
import SignUp from './Authentication/SignUp';
import LogIn from './Authentication/LogIn';
import Navbar from './Navbar';
import { loggedIn } from '../Redux/Actions/auth';
import HostActivity from './Host/Activity';
import HostForm from './Host/HostForm';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import HostRoute from './HostRoute';
import ListingForm from './ListingForm';
import ListingPage from './ListingPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loggedIn(dispatch);
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/host-activity">
            <HostActivity />
          </Route>
          <Route exact path="/listing/:id">
            <ListingPage />
          </Route>
          <ProtectedRoute exact component={HostForm} path="/host-onboarding" />
          <ProtectedRoute exact component={Profile} path="/user" />
          <HostRoute exact component={ListingForm} path="/listings/new" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
