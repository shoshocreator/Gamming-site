import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../ProjectContext/ProjectContext";
import TheGame from "../TheGame/TheGame";
import { useParams } from "react-router-dom";

const SortBy = () => {
  let params = useParams();
  console.log(params);

  let { GetSortBy, SortBy, Loading, GetSingleGame } =
    useContext(ProjectContext);

  useEffect(() => {
    GetSortBy(params.sortBy);
  }, [params]);

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
      <TheGame allData={SortBy} GetSingleGame={GetSingleGame} />
    </section>
  );
};

export default SortBy;
