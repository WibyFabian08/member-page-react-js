import axios from "axios";

export const orderAction = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

  console.log("token : ", token);

  axios
    .get("http://localhost:4000/orders-payment", {
      headers: { Authorization: token.refresh_token },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};
