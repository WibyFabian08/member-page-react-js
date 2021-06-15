import axios from "axios";

export const orderAction = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

  axios
    .get("http://localhost:4000/orders-payment", {
      headers: { Authorization: token.refresh_token },
    })
    .then((res) => {
      dispatch({type: 'SET_ORDER', value: res.data})
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};
