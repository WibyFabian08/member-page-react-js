import axios from "axios";

export const myCourseAction = (token) => (dispatch) => {
  dispatch({ type: "SET_STATUS", value: "loading" });
  axios
    .get("http://localhost:4000/my-courses", {
      headers: {
        Authorization: token,
      },
    })
    .then((result) => {
      dispatch({ type: "SET_STATUS", value: "ok" });
      dispatch({ type: "SET_MY_COURSE", value: result.data.data });
    })
    .catch((err) => {
      dispatch({ type: "SET_STATUS", value: "error" });
      dispatch({ type: "SET_MESSAGE", value: err.response.data.message });
    });
};

export const joinClassAction = (id, history) => (dispatch) => {
  let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));
  dispatch({ type: "SET_STATUS", value: "loading" });

  axios
    .post(
      `http://localhost:4000/my-courses/`,
      { course_id: id },
      {
        headers: {
          Authorization: token.refresh_token,
        },
      }
    )
    .then((result) => {
      dispatch({ type: "SET_STATUS", value: "ok" });
      dispatch({ type: "SET_JOIN_CLASS", value: result.data });
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch({ type: "SET_STATUS", value: "error" });
      dispatch({ type: "SET_MESSAGE", value: err.response.data.message });
    });
};
