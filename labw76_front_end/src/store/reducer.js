import {CHANGE_VALUE} from "./actions";

const initialState = {
    author: '',
    message: '',
    dateTime: '',
    id: '',
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_VALUE:
            const {name, value} = action.e.target;
            return {...state, [name]: value};

        default:
            return state;
    }
};

export default Reducer;