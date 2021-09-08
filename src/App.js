import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  const [missions, setMissions] = useState([]);

  const getMissionsList = async () => {
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((json) => {
        setMissions(json);
      });
  };

  useEffect(() => {
    getMissionsList();
  }, []);

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
