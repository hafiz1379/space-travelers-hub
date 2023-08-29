import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const { missions } = useSelector((state) => state.missions);

  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <ListGroup style={{ width: '42%' }}>
      <h2>My Missions</h2>
      {filteredMissions.map((mission) => (
        <ListGroup.Item style={{ padding: '15px' }} key={mission.mission_id}>
          {mission.mission_name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MissionsProfile;
