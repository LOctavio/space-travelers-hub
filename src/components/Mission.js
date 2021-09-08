import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Mission = (props) => {
  const { description, name } = props;
  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td className="button-container">
        <Button className="member-button" variant="secondary">NOT A MEMBER</Button>
      </td>
      <td className="button-container">
        <Button className="join-mission-button" variant="outline-secondary">JOIN MISSION</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Mission;
