import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginslice';
import accountslice from './accountslice';

export const store = configureStore(
    {
        reducer: {
            login: loginReducer,
            account: accountslice,
        },
    }
);