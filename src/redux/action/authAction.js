import axios from "axios";

export const loginAction = (form, history) => (dispatch) => {
  axios
    .post("http://localhost:4000/users/login", form)
    .then((result) => {
      axios
        .get("http://localhost:4000/users", {
          headers: {
            Authorization: result.data.token,
          },
        })
        .then((detail) => {
          const production =
            process.env.REACT_APP_FRONTPAGE_URL === "http://localhost:3000/"
              ? "http://localhost:3000/"
              : "";

          // simpan data detail user ke global state
          dispatch({ type: "SET_USER_DETAILS", value: detail.data.data });

          // simpan token ke localstorage
          localStorage.setItem(
            "BWAMICRO:token",
            JSON.stringify({ ...result.data, email: form.email })
          );

          // get localstorage redirect
          const redirect = localStorage.getItem("BWAMICRO:redirect");

          // buat variable data cookie
          const userCookie = {
            name: detail.data.data.name,
            avatar: detail.data.data.avatar,
          };

          // buat expires cookies
          const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 1000);

          // buat cookies
          document.cookie = `BWAMICRO:user=${JSON.stringify(
            userCookie
          )}; expires=${expires.toUTCString()}; path:/; ${production}`;

          history.push(redirect || "/");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch({ type: "SET_ERROR", value: err?.response?.data?.message });
    });
};

export const registerAction = (data, history) => (dispatch) => {
  axios
    .post("http://localhost:4000/users/register", data)
    .then(() => {
      history.push("/login");
    })
    .catch((err) => {
      dispatch({ type: "SET_ERROR", value: err?.response?.data?.message });
    });
};

export const logoutAction = (token, history, id) => (dispatch) => {
    axios
      .post("http://localhost:4000/users/logout", {user_id: id}, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        localStorage.removeItem("BWAMICRO:token");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
 
};
