import React from "react";
import allPic from "../../assets/all.jpg";
import { AiFillWindows, AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const All = () => {
  return (
    <section className="container text-white">
      <div className="row g-2 py-4">
        <Link to="SingleGame" className="col-md-3 cart py-5 cursor ">
          <img src={allPic} className="w-100" />
          <div className="allDes col-md-12 t d-flex flex-column bg-dark  p-2">
            <div className="d-flex justify-content-between text-muted">
              <h5> Diablo...</h5>
              <button className=" btn btn-primary">Free</button>
            </div>
            <h6 className="text-muted">A hero-foccused first-pers</h6>
            <div className="d-flex justify-content-between text-muted ">
              <AiFillPlusSquare className="fs-3" />
              <div className="d-flex">
                <span class="badge rounded-pill mx-1 bg-secondary">
                  Shooter
                </span>

                <AiFillWindows className="fs-3" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default All;
