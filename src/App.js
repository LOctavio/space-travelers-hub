import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import rocketHooks from './hooks/rockets';
import { getList } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);

  const getMissionsList = async () => {
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((json) => {
        dispatch(getList(json));
      });
  };

  rocketHooks();

  useEffect(() => {
    getMissionsList();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/my-profile">
            <Profile missions={missions} rockets={rockets} />
          </Route>
          <Route path="/missions">
            <Missions missions={missions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
