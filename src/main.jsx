import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import { ProjectContextProvider } from "./Components/ProjectContext/ProjectContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectContextProvider>
    <App />
  </ProjectContextProvider>
);
