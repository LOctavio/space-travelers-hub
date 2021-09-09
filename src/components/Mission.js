import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();

  const {
    description, name, id, reserved,
  } = props;
  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td className="button-container">
        <Button className="member-button" variant={reserved ? 'primary' : 'secondary'}>{ reserved ? 'Active Member' : 'NOT A MEMBER' }</Button>
      </td>
      <td className="button-container">
        <Button className="join-mission-button" variant="outline-secondary" onClick={() => (reserved ? dispatch(leaveMission(id)) : dispatch(joinMission(id)))}>{ reserved ? 'LEAVE MISSION' : 'JOIN MISSION' }</Button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  reserved: false,
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Mission;
