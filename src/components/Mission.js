import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMission } from '../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();

  const { description, name, id } = props;
  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td className="button-container">
        <Button className="member-button" variant="secondary">NOT A MEMBER</Button>
      </td>
      <td className="button-container">
        <Button className="join-mission-button" variant="outline-secondary" onClick={() => dispatch(joinMission(id))}>JOIN MISSION</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
