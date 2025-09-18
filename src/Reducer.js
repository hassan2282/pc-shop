import { replace, useNavigate } from "react-router-dom";

const initialState = {
    token: localStorage.getItem("token") || '',
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isAuthenticated: !!localStorage.getItem("token"),
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "login":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
            };
        case "logout":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };
            
        case "setUser":
            return {
                ...state,
                user: action.payload.user,
            }

        case "updateUser":
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.updates,
                }
            }    

            default:
                return state;
            }
        };

export default Reducer;