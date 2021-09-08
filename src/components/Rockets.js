import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import rocketHooks from '../hooks/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  rocketHooks();

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
