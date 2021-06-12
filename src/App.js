import { createBrowserHistory } from "history";
import React, { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";

import "./assets/css/style.css";

import { setAuthorizationHeader } from "./configs/axios";

import GuestRoute from "./components/Routes/GuestRoute";
import MemberRoute from "./components/Routes/MemberRoute";
import UnAuthenticated from "./Pages/401";
import NotFound from "./Pages/404";
import Joined from "./Pages/Joined";
import Login from "./Pages/Login";
import MyClass from "./Pages/MyClass";
import Register from "./Pages/Register";
import DetailClass from "./Pages/DetailClass";
import Setting from "./Pages/Setting";

function App() {
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

          <MemberRoute
            exact
            path="/courses/:class"
            component={DetailClass}
          ></MemberRoute>

          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailClass}
          ></MemberRoute>

          <MemberRoute exact path="/setting" component={Setting}></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
