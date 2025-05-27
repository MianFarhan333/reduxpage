import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Store/Authslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});