import React, { useContext, useEffect, useState } from "react";

import { ProjectContext } from "../ProjectContext/ProjectContext";
import TheGame from "../TheGame/TheGame";
import { useParams } from "react-router-dom";

const Categories = () => {
  let params = useParams();

  let [allData, setAllData] = useState(null);
  let { CategoriesData, Loading, setLoading, getCategories, GetSingleGame } =
    useContext(ProjectContext);
  useEffect(() => {
    getCategories(params.cat);
  }, [params.cat]);

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
      <TheGame allData={CategoriesData} GetSingleGame={GetSingleGame} />
    </section>
  );
};
export default Categories;
