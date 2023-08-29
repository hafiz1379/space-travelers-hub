import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const { missions } = useSelector((state) => state.missions);

  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <ListGroup style={{ width: '42%' }}>
      <h2>My Missions</h2>
      {filteredMissions.length > 0 ? (
        filteredMissions.map((mission) => (
          <ListGroup.Item style={{ padding: '15px' }} key={mission.mission_id}>
            {mission.mission_name}
          </ListGroup.Item>
        ))
      ) : (
        <h4 style={{ marginTop: '3rem', color: '#0d6efd', fontSize: '2rem' }}>No missions joined</h4>
      )}
    </ListGroup>
  );
};

export default MissionsProfile;
