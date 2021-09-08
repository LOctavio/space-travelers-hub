import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import { getList } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  const getMissionsList = async () => {
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((json) => {
        dispatch(getList(json));
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
          <Route path="/rockets">
            <Rockets />
          </Route>
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
