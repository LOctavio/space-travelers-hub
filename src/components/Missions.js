import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Mission from './Mission';

const Missions = (props) => {
  const { missions } = props;
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
        {missions.map((mission) => (
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

Missions.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Missions;
