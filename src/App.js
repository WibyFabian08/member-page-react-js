import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/css/style.css";

import MemberRoute from "./components/Routes/MemberRoute";
import GuestRoute from "./components/Routes/GuestRoute";

import Login from "./Pages/Login";
import MyClass from "./Pages/MyClass";

import NotFound from "./Pages/404";
import UnAuthenticated from "./Pages/401";

import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Register from "./Pages/Register";
import Joined from "./Pages/Joined";
import { setAuthorizationHeader } from "./configs/axios";

function App() {
  const dispatch = useDispatch();
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWAMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"));
      setAuthorizationHeader(session.token);
    }
  }, []);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={UnAuthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
