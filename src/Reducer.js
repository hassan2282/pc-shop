const initialState = {
    token: localStorage.getItem("token") || '',
    user: null,
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
            default:
                return state;
            }
        };

export default Reducer;