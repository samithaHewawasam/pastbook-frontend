import React from "react";
import { Route, Redirect } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

/**
 * Auth Component
 * @constructor
 * @alias AuthRoute
 * @description Use for private routes
 * @param props properties.
 * @param props.Component Route components
 * @param props.isLogin true when login success
 * @param props.rest rest properties
 */

export const Com = ({ Component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          Component
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin
  };
};

export const AuthRoute = compose(connect(mapStateToProps))(Com);
