import React from "react";

const JoinFree = () => {
  return (
    <>
      <div className="container loginSec py-5 ">
        <div className="row bg-light login-form">
          <div className="col-md-6 m-0 p-0 login-img h-100">
            <div className="imgBack"></div>
          </div>
          <div className="col-md-6 py-5  d-flex flex-column align-items-center bg-dark  login-info">
            <h1 className="h4 text-white">Create My Account!</h1>

            <form className=" loginForm  joinSec d-flex flex-column justify-content-center align-items-center text-center w-75">
              <div className="name  d-flex justify-content-between col-md-12">
                <input className=" " type="text" placeholder="First Name" />
                <input className=" " type="text" placeholder="Last Name" />
              </div>
              <input
                className=" w-100 form-control   my-1"
                type="email"
                placeholder="Email"
              />
              <input
                className=" col-md-4 w-100 form-control my-1"
                type="number"
                placeholder="age"
              />
              <input
                className=" w-100 form-control  my-1"
                type="Password"
                placeholder="Password"
              />
              <button className="form-control  py-1 my-3 text-white loginBtForm w-100">
                Create Account
              </button>
            </form>
            <div className=" h6 py-2 line  text-muted fw-lighter text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of <a className="cursor text-muted"> Service</a> apply.
            </div>
            <h2 className=" h6 py-1 text-muted fw-lighter">
              Already a member?
              <span className="text-primary cursor "> Log In</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinFree;
