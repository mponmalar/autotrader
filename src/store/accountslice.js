import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accounts: '',
    selectedAccount:'',
    accountDetails:'',
}

export const accountslice = createSlice(
    {
        name: 'account',
        initialState,
        reducers: { 
            loadAccounts: (state, action) => {
                state.accounts = action.payload
            },
            updateSelectedAccount: (state, action) => {
                state.selectedAccount = action.payload;
            },
            updateSelectedAccountDetails: (state, action) => {
                state.accountDetails = action.payload;
            }
        }
    }
);

export const { loadAccounts, updateSelectedAccount, updateSelectedAccountDetails } = accountslice.actions;
export default accountslice.reducer;