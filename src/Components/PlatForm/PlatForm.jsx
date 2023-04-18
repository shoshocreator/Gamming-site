import React, { useContext, useEffect, useState } from "react";

import { ProjectContext } from "../ProjectContext/ProjectContext";
import TheGame from "../TheGame/TheGame";
import { useParams } from "react-router-dom";

const PlatForm = () => {
  let params = useParams();
  console.log(params);

  let [allData, setAllData] = useState(null);
  let { PlatFormData, Loading, setLoading, GetPlatForm, GetSingleGame } =
    useContext(ProjectContext);

  useEffect(() => {
    GetPlatForm(params.platform);
  }, [params.platform]);

  if (Loading) {
    return (
      <h1
        className="d-flex vh-100 justify-content-center text-danger"
        style={{ marginTop: "200px" }}
      >
        loading.....
      </h1>
    );
  }

  return (
    <section className="container text-white">
      <TheGame allData={PlatFormData} GetSingleGame={GetSingleGame} />
    </section>
  );
};

export default PlatForm;
