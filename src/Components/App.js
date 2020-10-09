import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import SignUp from './Authentication/SignUp';
import LogIn from './Authentication/LogIn';
import Navbar from './Navbar';

function App() {
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
