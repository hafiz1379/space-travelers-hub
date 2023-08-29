import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions-slice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
