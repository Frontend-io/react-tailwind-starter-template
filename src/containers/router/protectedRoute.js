import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getCookie("broker_token");
  const isLoggedIn = token /*&& !isTokenExpired(token) */

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return (<></>)
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: props.location,
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;