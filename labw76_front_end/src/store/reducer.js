import {CHANGE_VALUE, FETCH_SUCCESS, POST_SUCCESS} from "./actions";

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
            const {name, value} = action.e.currentTarget;
            return {...state, [name]: value};

        case FETCH_SUCCESS:
            console.log(action.res);
            let dateTime = action.res[action.res.length - 1].dateTime;
            console.log(dateTime);
            return {...state, apiMessages: action.res, dateTime: dateTime};

        case POST_SUCCESS:
            console.log(action.res);
            let copy = state.apiMessages;
            copy.push(action.res);
            return {...state, apiMessages: copy};

        default:
            return state;
    }
};

export default Reducer;