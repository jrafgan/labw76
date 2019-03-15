import {ENCODE_SUCCESS} from "./actions";

const initialState = {
    encoded: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ENCODE_SUCCESS:
            return {...state, encoded: action.encode};

        default:
            return state;
    }
};

export default Reducer;