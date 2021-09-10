import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions, rockets } = props;
  const activeMissions = missions.filter((mission) => mission.reserved === true);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
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
          <Table bordered>
            <tbody>
              {activeRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rockets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Profile;
