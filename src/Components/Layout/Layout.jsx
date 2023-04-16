import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className=" py-5 vh-100">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
