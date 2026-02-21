const initialState = {
    token: localStorage.getItem("token") || '',
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isAuthenticated: !!localStorage.getItem("token"),
    cart: [],
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
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
            const updatedUser = {
                ...state.user,
                ...action.payload.updates,
            };
            localStorage.setItem("user", JSON.stringify(updatedUser));
            return {
                ...state,
                user: updatedUser,
            }

        case "purchase":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
            // localStorage.setItem("purchase", JSON.stringify(purchase));
            default:
                return state;
            }
        };

export default Reducer;
