import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export default class Loginpage extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required!"),
          password: Yup.string()
            .required("Password is required!")
            .test(
              "len",
              "Provide Valid Password ,it seems too short",
              val => val && val.toString().length >= 8
            )
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
        render={props => {
          const {
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          console.log(errors);

          return (
            <form
              className="text-center border border-light p-5 loginform"
              onSubmit={handleSubmit}
            >
              <p className="h4 mb-4">Sign in</p>

              <input
                type="text"
                id="defaultLoginFormEmail"
                className="form-control mb-4"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="E-mail"
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <input
                type="password"
                id="defaultLoginFormPassword"
                className="form-control mb-4"
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <div className="d-flex justify-content-around">
                <div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultLoginFormRemember"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="defaultLoginFormRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <a href="#forgotpassword">Forgot password?</a>
                </div>
              </div>

              <button className="btn btn-info btn-block my-4" type="submit">
                Sign in
              </button>

              <p>
                Not a member?
                <a href="#register">Register</a>
              </p>
            </form>
          );
        }}
      />
    );
  }
}
