import React from "react";
import { useContext } from "react";

import { AiFillWindows, AiFillPlusSquare, AiFillFile } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProjectContext } from "../ProjectContext/ProjectContext";

const ChangingPage = (props) => {
  const { game } = props;
  let newDesc = game?.short_description?.split(" ");
  if (newDesc.length > 3) {
    newDesc = newDesc?.splice(0, 3).join(" ");
  } else {
    newDesc = game?.short_description;
  }
  let newTitle = game?.title?.split(" ");
  if (newTitle.length > 2) {
    newTitle = newTitle?.splice(0, 1).join(" ");
  } else {
    newTitle = game?.title;
  }

  return (
    <>
      <Link
        to={`/singlegame/${game?.id}`}
        className="col-md-3 cart py-2 cursor "
      >
        <img src={game?.thumbnail} className="w-100" />
        <div className="allDes col-md-12 t d-flex flex-column bg-dark  p-2">
          <div className="d-flex justify-content-between text-muted">
            <h5>{newTitle}</h5>
            <button className=" btn btn-primary">Free</button>
          </div>
          <h6 className="text-muted">{newDesc}</h6>
          <div className="d-flex justify-content-between text-muted ">
            <AiFillPlusSquare className="fs-3" />
            <div className="d-flex">
              <span className="badge rounded-pill mx-1  d-flex bg-secondary">
                {game?.genre}
              </span>
              {game?.platform == "PC (Windows)" ? (
                <AiFillWindows className="fs-4" />
              ) : (
                <AiFillFile className="fs-4" />
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ChangingPage;
