import React from "react";
import pic from "../../assets/logo.png";
const Login = () => {
  return (
    <>
      <div className="container py-5 loginSec">
        <div className="row bg-light login-form">
          <div className="col-md-6 m-0 p-0 login-img h-100">
            <div className="imgBack"></div>
          </div>
          <div className="col-md-6 py-5  d-flex flex-column align-items-center bg-dark  login-info">
            <img src={pic} className="gamePic" />
            <h1 className="h4 text-muted">Log in to GameOver</h1>
            <form className=" loginForm d-flex flex-column justify-content-center align-items-center text-center w-75">
              <input
                className=" w-100 form-control"
                type="email"
                placeholder="Email"
              />
              <input
                className=" w-100 form-control my-2"
                type="Password"
                placeholder="Password"
              />
              <button className="form-control py-1 my-3 text-white loginBtForm w-100">
                Login
              </button>
            </form>
            <h2 className=" h6 py-2  cursor text-primary fw-lighter ">
              Forgot Password?
            </h2>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Not a member yet?
              <span className="text-primary cursor "> Create an Account</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
