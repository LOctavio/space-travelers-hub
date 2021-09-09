import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Mission from './Mission';

const Missions = () => {
  const mission = useSelector((state) => state.missionsReducer);
  return (
    <Table className="missions-list" bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {mission.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
