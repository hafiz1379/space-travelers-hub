import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionsProfile from '../components/MissionsProfile/MissionsProfile';

const mockStore = configureStore();
const initialStateMissionsReserved = {
  missions: {
    missions: [
      {
        mission_id: 'test 1',
        mission_name: 'Test name',
        description: 'test description',
        reserved: true,
      },
    ],
  },
};

const initialStateWithoutReservedMission = {
  missions: {
    missions: [
      {
        mission_id: 'test 1',
        mission_name: 'Test name',
        description: 'test description',
        reserved: false,
      },
    ],
  },
};

describe('MissionsProfile Component', () => {
  it('should render missions with reserved status', () => {
    const store = mockStore(initialStateMissionsReserved);

    const { getByText } = render(
      <Provider store={store}>
        <MissionsProfile />
      </Provider>,
    );

    const missionNameElement = getByText('Test name');
    expect(missionNameElement).toBeInTheDocument();
  });
  it('should display a message when no missions are reserved', () => {
    const store = mockStore(initialStateWithoutReservedMission);

    const { getByText } = render(
      <Provider store={store}>
        <MissionsProfile />
      </Provider>,
    );

    const noReservedMissionsText = getByText('No missions joined');
    expect(noReservedMissionsText).toBeInTheDocument();
  });
});
