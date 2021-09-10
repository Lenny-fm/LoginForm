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

    //Slice name
    name:"user",
    //Slice name
    
    //Initial State
    initialState,
    //Initial State

    //Implementing Reducer
    reducers:Reducer
    //Implementing Reducer
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer