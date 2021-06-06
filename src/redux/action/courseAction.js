import axios from 'axios';

export const myCourseAction = (token) => (dispatch) => {
    dispatch({type: 'SET_STATUS', value: 'loading'});
    axios
      .get("http://localhost:4000/my-courses", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        dispatch({type: 'SET_STATUS', value: 'ok'})
        dispatch({type: 'SET_MY_COURSE', value: result.data.data});
      })
      .catch((err) => {
        dispatch({type: 'SET_STATUS', value: 'error'});
        dispatch({type: 'SET_MESSAGE', value: err.response.data.message});
        // console.log('error : ', err.response.data.message)
      });
}