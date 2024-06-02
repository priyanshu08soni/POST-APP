//curly brackets=same name importing
//without curly brackets=globly importing
import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});
