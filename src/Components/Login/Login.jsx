import React, { useContext, useState } from "react";
import pic from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { ProjectContext } from "../ProjectContext/ProjectContext";
useNavigate;
const Login = () => {
  const [loading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);
  const { sveUserData } = useContext(ProjectContext);

  let navigation = useNavigate();
  async function handelRegister(values) {
    setIsLoading(true);

    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signin",
        values
      );
      localStorage.setItem("userToken", data.token);
      sveUserData();
      setIsLoading(false);
      setIsError(false);
      navigation("/");
    } catch (error) {
      setIsError(true);
      setErrormessage(error.response.data.message);
    }
    setIsLoading(false);
  }
  let validationSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is Required"),
    password: Yup.string()
      .required("password is Required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password is not valid"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handelRegister,
  });
  return (
    <>
      <div className="container py-5 loginSec">
        <div className="row bg-light login-form">
          <div className="col-md-6 m-0 p-0 login-img">
            <div className="imgBack"></div>
          </div>
          <div className="col-md-6 py-5  d-flex flex-column align-items-center bg-dark  login-info">
            <img src={pic} className="gamePic" />
            <h1 className="h4 text-muted">Log in to GameOver</h1>
            {isError ? (
              <div className="alert alert-danger">{errorMessage}</div>
            ) : (
              ""
            )}
            <form
              onSubmit={formik.handleSubmit}
              className="  text-white loginForm d-flex flex-column justify-content-center align-items-center text-center w-75"
            >
              <label htmlFor="name">email</label>
              <input
                className=" w-100 form-control"
                type="email"
                name="email"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}
              <label htmlFor="password">password</label>
              <input
                className=" w-100 form-control my-2"
                type="password"
                name="password"
                id="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
              {loading ? (
                <button className="form-control py-1 my-3 text-white loginBtForm w-100">
                  loading..
                </button>
              ) : (
                <button
                  type="submit"
                  className="form-control py-1 my-3 text-white loginBtForm w-100"
                >
                  Login
                </button>
              )}
            </form>
            <h2 className=" h6 py-2  cursor text-primary fw-lighter ">
              Forgot Password?
            </h2>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Not a member yet?
              <Link to="/JoinFree" className="text-primary cursor ">
                Create an Account
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
