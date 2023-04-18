import React, { useContext } from "react";
import { ProjectContext } from "../ProjectContext/ProjectContext";
import { Navigate, useNavigate } from "react-router-dom";
const Protector = (props) => {
  //   let navigate = useNavigate();
  if (!localStorage.getItem("userToken")) {
    // return navigate("/logIn");
    return <Navigate to={"/logIn"} />;
  } else {
    return props.children;
  }
};

export default Protector;
