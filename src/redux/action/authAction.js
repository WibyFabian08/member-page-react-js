import axios from 'axios';

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
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
}