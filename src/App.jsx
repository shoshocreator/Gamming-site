import {
  Login,
  JoinFree,
  Layout,
  All,
  Home,
  SingleGame,
  PlatForm,
  SortBy,
  Categories,
} from "./Pages";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Protector from "./Components/Protector/Protector";

// <All/

const App = () => {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Protector>
              <Home />
            </Protector>
          ),
        },
        {
          path: "logIn",
          element: <Login />,
        },
        {
          path: "JoinFree",
          element: <JoinFree />,
        },
        {
          path: "all",
          element: (
            <Protector>
              <All />
            </Protector>
          ),
        },
        {
          path: "singlegame/:id",
          element: (
            <Protector>
              <SingleGame />
            </Protector>
          ),
        },
        {
          path: "/Platforms/:platform",
          element: (
            <Protector>
              <PlatForm />
            </Protector>
          ),
        },
        {
          path: "/sortBy/:sortBy",
          element: (
            <Protector>
              <SortBy />
            </Protector>
          ),
        },
        {
          path: "/categories/:cat",
          element: (
            <Protector>
              <Categories />
            </Protector>
          ),
        },
        {
          path: "*",
          element: <h1 className="text-light m-5">page not exist</h1>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      {/* <Layout />
      <Login />
      <JoinFree /> */}
    </>
  );
};

export default App;
