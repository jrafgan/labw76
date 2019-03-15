import axios from '../axios_url'

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';

export const changeValue = (e) => {
    return {type: CHANGE_VALUE, e}
};

export const sendToEncode = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.password === '') {
            alert('Please, Enter Password')
        } else {
            axios.post('/encode', {password: state.password, message: state.decoded}).then(response => {
                dispatch(encodeSuccess(response.data.encoded))
            });
        }
    }
};
