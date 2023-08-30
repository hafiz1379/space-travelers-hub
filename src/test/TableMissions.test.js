import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import TableMissions from '../components/TableMissions/TableMissions';

const mockStore = configureStore([]);

describe('TableMissions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Description 1',
            reserved: false,
          },
        ],
      },
    });
  });

  it('renders mission data correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TableMissions />
      </Provider>,
    );

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
    expect(getByText('Join Mission')).toBeInTheDocument();
  });

  it('dispatches joinMission action when clicking Join Mission button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TableMissions />
      </Provider>,
    );

    const joinButton = getByText('Join Mission');
    fireEvent.click(joinButton);

    const expectedAction = {
      type: 'mission/joinMission',
      payload: '1',
    };
    expect(store.getActions()).toContainEqual(expectedAction);
  });

  it('dispatches leaveMission action when clicking Leave Mission button', () => {
    const updatedStore = mockStore({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Description 1',
            reserved: true,
          },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={updatedStore}>
        <TableMissions />
      </Provider>,
    );

    const leaveButton = getByText('Leave Mission');
    fireEvent.click(leaveButton);

    const expectedAction = {
      type: 'mission/leaveMission',
      payload: '1',
    };
    expect(updatedStore.getActions()).toContainEqual(expectedAction);
  });
});
