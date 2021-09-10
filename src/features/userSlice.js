import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null
}

const Reducer = {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    },
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:Reducer
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer