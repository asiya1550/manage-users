import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';

const rootReducer = combineReducers({
    users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;