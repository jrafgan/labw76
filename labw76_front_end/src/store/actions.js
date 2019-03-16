import axios from '../axios_url'

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';

export const changeValue = (e) => {
    //return {type: CHANGE_VALUE, e}
};

export const getMessages = () => {
    return (dispatch, getState) => {
        axios.get('/messages').then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
    };

};
