import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missions-slice';
import './TableMissions.css';

const TableMissions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
            <td className="align-middle"><Button className="btn-join" variant="outline-secondary">Join Mission</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableMissions;
