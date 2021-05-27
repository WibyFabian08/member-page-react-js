import React from "react";
import { withRouter, Redirect, Route } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  match,
  location,
  path,
  ...rest
}) => {
  const ok = localStorage.getItem("BWAMICRO:token");
  console.log('rest : ', rest);
  console.log('location : ', location);
  console.log('match : ', match);
  localStorage.removeItem("BWAMICRO:redirect");

  return (
    <Route
      {...rest}
      render={(props) => 
        ok ? (
          <Component {...props}></Component>
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`}></Redirect>
        ) : (
          <Redirect to={`/private?path=${location.pathname}`}></Redirect>
        )
      }
    ></Route>
  );
};

export default withRouter(MemberRoute);
