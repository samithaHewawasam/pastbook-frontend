import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { connect } from "react-redux";
import { RenderField } from "../Components/RenderField";
import { login } from "./Actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Login.css";

/**
 * validation for login
 * @constructor
 * @alias LoginValidation
 * @description Validations
 * @param values Login Credentials.
 * @param values.username User's username
 * @param values.password User's password
 */

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

/**
 * Login Component
 * @constructor
 * @alias LoginComponent
 * @description Login
 * @param props Login Properties
 * @param props.isLogin true after login success
 */

const Com = props => {
  /**
   * Login Submit
   * @constructor
   * @alias handleLogin
   * @description Login Submit
   * @param values Login Credentials
   * @param values.username User's username
   * @param values.password User's password
   * @param form Form props
   * @param form.setSubmitting false after submit success
   * @param form.resetForm reset the form after submit success
   */

  const handleLogin = (values, { setSubmitting, resetForm }) => {
    const { login } = props;

    login({
      where: { ...values }
    });

    setSubmitting(false);
    resetForm();
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  const { isLogin } = props;

  if (isLogin) {
    return <Redirect to={from} />;
  }

  return (
    <Container className="container-login limiter" fluid>
      <Row className="wrap-login">
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={validate}
          onSubmit={handleLogin}
        >
          {({
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit} className="login-form">
              <img
                src="https://www.pastbook.com/one-click-photo-products/assets/images/Logo-01.png"
                style={{ height: "30px", marginBottom: "20px" }}
                className=""
                alt="React Bootstrap logo"
              />
              <div className="form-group">
                <Field
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                <ErrorMessage name="username" component="div" />
              </div>
              <div className="form-group">
                <Field
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" />
              </div>

              <Button block type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export const Login = compose(connect(mapStateToProps, mapDispatchToProps))(Com);
