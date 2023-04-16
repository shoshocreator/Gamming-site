import React, { createContext, useContext, useState } from "react";
export const ProjectContext = createContext();
export const ProjectContextProvider = (props) => {
  let [proj, setProj] = useState(0);
  return (
    <ProjectContext.Provider value={{ proj }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
