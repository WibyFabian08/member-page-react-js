import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/css/style.css";

import MemberRoute from "./components/Routes/MemberRoute";
import GuestRoute from "./components/Routes/GuestRoute";

import Login from "./Pages/Login";
import NotFound from "./Pages/401";
import MyClass from "./Pages/MyClass";
import UnAuthenticated from "./Pages/401";

import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./Pages/Register";

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <GuestRoute path="/login" component={Login}></GuestRoute>
            <GuestRoute path="/register" component={Register}></GuestRoute>
            <GuestRoute
              path="/private"
              component={UnAuthenticated}
            ></GuestRoute>

            <MemberRoute exact path="/" component={MyClass}></MemberRoute>

            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
