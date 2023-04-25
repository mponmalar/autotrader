import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: '',
}

export const loginslice = createSlice(
    {
        name: 'login',
        initialState,
        reducers: { 
            updateUser: (state, action) => {
                state.user = action.payload
            },
        }
    }
);

export const { updateUser } = loginslice.actions;
export default loginslice.reducer;