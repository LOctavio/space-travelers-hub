import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="container my-3 p-3">
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
