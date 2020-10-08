import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
