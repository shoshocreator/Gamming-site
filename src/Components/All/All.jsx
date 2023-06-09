import React, { useContext, useEffect, useState } from "react";

import { ProjectContext } from "../ProjectContext/ProjectContext";
import TheGame from "../TheGame/TheGame";

const All = () => {
  let [allData, setAllData] = useState(null);
  let { GetAll, Loading, setLoading, GetSingleGame } =
    useContext(ProjectContext);

  async function GettingAll() {
    let result = await GetAll();
    if (result?.status == 200) {
      setLoading(false);
      setAllData(result?.data);
    }
  }
  useEffect(() => {
    GettingAll();
  }, []);
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
      <TheGame allData={allData} GetSingleGame={GetSingleGame} />
    </section>
  );
};

export default All;
