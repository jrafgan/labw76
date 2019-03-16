import axios from '../axios_url'

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const changeValue = (e) => {
    return {type: CHANGE_VALUE, e}
};

export const fetchSuccess = (res) => {
    return {type: FETCH_SUCCESS, res}
};

export const getMessages = () => {
    return (dispatch, getState) => {
        axios.get('/messages').then(response => {
            dispatch(fetchSuccess(response.data));
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
    };

};

export const sendToServer = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        const state = getState();

        axios.post('/messages', {author: state.author, message: state.message}).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('This is error text ', error);
        });
        console.log('sending to server is ok', e.currentTarget);
    };

};