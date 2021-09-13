import { LOGIN } from "./login";

const initialState = {
    email:"",
    name:"",
    password:""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action)
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export default userReducer