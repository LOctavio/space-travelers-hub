import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions } = props;
  const activeMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <Container>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <Table bordered>
            <tbody>
              {activeMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>
                    {mission.mission_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>My Rockets</h2>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Profile;
