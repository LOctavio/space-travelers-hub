import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/my-profile">
            <Profile />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
