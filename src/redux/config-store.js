import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions-slice';
import rocketsReducer from './rockets/rockets-slice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
