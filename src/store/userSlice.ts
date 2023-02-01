import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './reducers';

export interface User {
    id: string;
    email: string;
    role: string;
}

interface UsersState {
    loading: boolean;
    hasErrors: boolean;
    user: User
};

export const initialState: UsersState = {
    loading: false,
    hasErrors: false,
    user: {
        id: '',
        email: '',
        role: ''
    }
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        startLoading: (state) => {
            state.loading = true;
        },
        getUserSuccess: (state, action) => {
            console.log(action);
            
            state.user = action.payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getUserFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    },
});

export const { actions } = usersSlice;
export const usersSelector = (state: RootState) => state.users;

const userReducer = usersSlice.reducer;
export default userReducer;