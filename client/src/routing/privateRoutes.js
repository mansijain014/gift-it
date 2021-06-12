import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state);
  const { isLoggedIn } = state;

  return <>{isLoggedIn ? <Component /> : <Redirect to="/auth/login" />}</>;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default PrivateRoute;
