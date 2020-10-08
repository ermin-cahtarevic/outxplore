import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main';
import SignUp from './Components/Authentication/SignUp';
import LogIn from './Components/Authentication/LogIn';
import Navbar from './Components/Navbar';

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
