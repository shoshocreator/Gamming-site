import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const JoinFree = () => {
  const [loading, setIsLoading] = useState(false);
  let navigation = useNavigate();
  async function handelRegister(values) {
    setIsLoading(true);

    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        values
      );

      navigation("/login");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  let validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "minimum length is ")
      .required(" name is Required"),
    email: Yup.string().email("email is invalid").required("email is Required"),
    password: Yup.string()
      .required("password is Required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password is not valid"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")])

      .required("rePassword is Required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone must be Egyption one")

      .required("phone is Required"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",

      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handelRegister,
  });

  return (
    <>
      <div className="container loginSec py-5 ">
        <div className="row bg-light login-form md-flex-wrap">
          <div className="col-md-6 m-0 p-0 login-img">
            <div className="imgBack"> </div>
          </div>
          <div className="col-md-6 py-5  d-flex flex-column align-items-center bg-dark  login-info">
            <h1 className="h4 text-white">Create My Account!</h1>

            <form
              className=" text-white  loginForm  joinSec d-flex flex-column justify-content-center align-items-center text-center w-75 md-w-100  "
              onSubmit={formik.handleSubmit}
            >
              <input
                className="form-control bg-light"
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                placeholder="name"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="alert alert-danger">{formik.errors.name}</div>
              ) : (
                ""
              )}
              <input
                className="w-100 form-control   my-1  bg-light"
                type="email"
                name="email"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}

              <input
                className="col-md-4 w-100 form-control my-1 bg-light"
                type="password"
                name="password"
                id="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}

              <input
                className=" w-100 form-control  my-1 bg-light"
                type="password"
                name="rePassword"
                id="rePassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rePassword}
                placeholder="re password"
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="alert alert-danger">
                  {formik.errors.rePassword}
                </div>
              ) : (
                ""
              )}

              <input
                className="form-control bg-light"
                type="tell"
                name="phone"
                id="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="phone"
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="alert alert-danger">{formik.errors.phone}</div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="form-control  py-1 my-3 text-white loginBtForm w-100"
              >
                Create Account
              </button>
            </form>
            <div className=" h6 py-2 line  text-muted fw-lighter text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of <a className="cursor text-muted"> Service</a> apply.
            </div>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Already a member?
              <Link to="/" className="text-primary cursor ">
                {" "}
                Log In
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinFree;
