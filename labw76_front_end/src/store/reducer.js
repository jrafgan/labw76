import {CHANGE_VALUE, FETCH_SUCCESS} from "./actions";

const initialState = {
    apiMessages: [],
    author: '',
    message: '',
    dateTime: '',
    id: '',
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_VALUE:
            console.log(action.e);
            const {name, value} = action.e.currentTarget;
            return {...state, [name]: value};

        case FETCH_SUCCESS:
            return {...state, apiMessages: action.res};

        default:
            return state;
    }
};

export default Reducer;