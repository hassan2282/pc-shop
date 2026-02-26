const initialState = {
    token: localStorage.getItem("token") || '',
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isAuthenticated: !!localStorage.getItem("token"),
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    address: JSON.parse(localStorage.getItem("address")) || [],
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
            return initialState;

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


        case "ADD_ADDRESS":
            return {
                ...state,
                address: action.payload
            }

        case "DELETE_ADDRESS":
            return {
                ...state,
                address: ''
            }


        case "purchase":
            const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);
            let updatedCart;

            if (existingIndex >= 0) {
                // آیتم وجود دارد: فقط count را به‌روز کن
                updatedCart = state.cart.map((item, index) =>
                    index === existingIndex
                        ? { ...item, count: item.count + action.payload.count }
                        : item
                );
            } else {
                // آیتم جدید: به آرایه اضافه کن
                updatedCart = [...state.cart, action.payload];
            }

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {
                ...state,
                cart: updatedCart,
            };



        case "UPDATE_CART_ITEM_COUNT":
            const { id, count } = action.payload;

            const updatedPurchase = state.cart.map(item =>
                item.id === id ? { ...item, count: Math.max(0, count) } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedPurchase));
            return {
                ...state,
                cart: updatedPurchase,
            }


        case "deleteProduct":

            return {
                ...state,
                cart: action.payload
            }


        case "DELETE_CART":
            return {
                ...state,
                cart: '',
            }


        default:
            return state;
    }
};

export default Reducer;
