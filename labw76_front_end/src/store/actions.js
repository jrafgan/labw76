import axios from '../axios_url'

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const CATCH_ERROR = 'CATCH_ERROR';

export const changeValue = (e) => {
    return {type: CHANGE_VALUE, e}
};

export const fetchSuccess = (res) => {
    return {type: FETCH_SUCCESS, res}
};

export const catchError = (err) => {
    return {type: CATCH_ERROR, err}
};

export const getMessages = () => {
    return (dispatch, getState) => {
        axios.get('/messages').then(response => {
            dispatch(fetchSuccess(response.data));
            console.log(response.data);
        }).catch(error => {
            console.error('Wrong dateTime requested', error);
        });
    };

};

export const checkNewMessage = () => {
  return(dispatch, getState) => {
      const state = getState();
      axios.get('/messages', {dateTime: state.dateTime}).then(response=>{
          console.log(response.data);
      })
  }
};

export const sendToServer = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        const state = getState();

        axios.post('/messages', {author: state.author, message: state.message, dateTime: "2019-03-"}).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Author & message can not be empty', error);
        });
    };

};