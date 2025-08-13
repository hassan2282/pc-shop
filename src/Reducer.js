const initialState = {
//   toggle: false,
//   taskbarOffset: 0,
//   id: null,
//   partners:[],
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "Toggle_Taskbar":
            return {
        ...state,
        toggle: !state.toggle,
        taskbarOffset: action.taskbarOffset, // این مقدار از اکشن دریافت می‌شود
        id: action.id // این مقدار از اکشن دریافت می‌شود
    };
            
            default:
                return state;
            }
        };

export default Reducer;