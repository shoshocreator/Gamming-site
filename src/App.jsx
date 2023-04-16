import { Login, JoinFree, Layout, All, Home, SingleGame } from "./Pages";
import ReactDOM from "react-dom/client";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// <All/

const App = () => {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Layout />,
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
          element: <All />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "all/SingleGame",
          element: <SingleGame />,
        },
        // { path: "Login", element: <Login sveUserData={sveUserData} /> },
        // { path: "*", element: <NotFound /> },
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
