import missionReducer, { joinMission, leaveMission, getMissions } from '../redux/missions/missions-slice';

describe('missionSlice', () => {
  it('should handle joinMission', () => {
    const initialState = {
      missions: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: false },
      ],
    };

    const newState = missionReducer(initialState, joinMission(1));

    expect(newState.missions[0].reserved).toBe(true);
  });

  it('should handle leaveMission', () => {
    const initialState = {
      missions: [
        { mission_id: 1, reserved: true },
        { mission_id: 2, reserved: false },
      ],
    };

    const newState = missionReducer(initialState, leaveMission(1));

    expect(newState.missions[0].reserved).toBe(false);
  });

  it('should handle getMissions.fulfilled', () => {
    const initialState = {
      missions: [],
    };

    const response = [
      { mission_id: 1, mission_name: 'Mission 1', description: 'Description 1' },
      { mission_id: 2, mission_name: 'Mission 2', description: 'Description 2' },
    ];
    const newState = missionReducer(initialState, getMissions.fulfilled(response));

    expect(newState.missions).toEqual(response);
  });
});
