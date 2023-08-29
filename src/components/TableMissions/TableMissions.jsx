import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../../redux/missions/missions-slice';
import './TableMissions.css';

const TableMissions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  });

  const handleUpdateStore = (id) => {
    const selectedMission = missions.find((mission) => mission.mission_id === id);
    if (selectedMission.reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} id={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td className="align-middle"><button className="btn-member" type="button">Not a Member</button></td>
            <td className="align-middle"><Button className="btn-join" variant="outline-secondary" onClick={() => handleUpdateStore(mission.mission_id)}>Join Mission</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableMissions;
