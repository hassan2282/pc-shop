const initialState = {
    token: localStorage.getItem("token") || '',
    user: null,
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "loginSuccess":
            return {
                ...state,
                token: action.token,
                user: action.user,
            };
            
            default:
                return state;
            }
        };

export default Reducer;