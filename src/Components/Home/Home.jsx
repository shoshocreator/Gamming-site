import React, { useState } from "react";
import homePic from "../../assets/home.png";
import firstCart from "../../assets/cartHome1.jpg";
import secondCart from "../../assets/cartHome2.jpg";
import thirdCart from "../../assets/cartHome3.jpg";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        className="py-5   text-center m-auto home-pic w-80 hero"
        style={{ backgroundImage: `url(${homePic})` }}
      >
        <h1 className="">
          Find & track the best
          <span className="text-primary"> free-to-play </span>games!
        </h1>
        <h2 className="h4 m-0 p-0">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </h2>
        <button className=" my-3 py-2 btn browser-game btn-dark">
          Browser Games
        </button>
      </section>
      <div className="homeDivider"></div>
      <section className="container bottomHome  ">
        <div className="d-flex my-2 ">
          <FaRobot className="  mx-2 fs-2 text-muted" />
          <h3 className="text-muted ">Personalized Recommendations</h3>
        </div>
        <div className="row">
          <Link className="homeCart col-md-4" to={"/singlegame/511"}>
            <img
              src="https://www.freetogame.com/g/511/thumbnail.jpg"
              className="w-100"
            />
            <div className="d-flex  homeLine justify-content-between py-2 ">
              <h4 className=" px-2 text-muted">Phantasy Star Online</h4>
              <button className="btn btn-primary">Free</button>
            </div>
          </Link>
          <Link className="homeCart col-md-4" to={"/singlegame/528"}>
            <img
              src="https://www.freetogame.com/g/528/thumbnail.jpg"
              className="w-100"
            />
            <div className="d-flex  homeLine justify-content-between py-2 ">
              <h4 className=" px-2 text-muted">Noah’s Heart</h4>
              <button className="btn btn-primary">Free</button>
            </div>
          </Link>
          <Link className="homeCart col-md-4  w" to={"/singlegame/525"}>
            <img
              src="https://www.freetogame.com/g/525/thumbnail.jpg"
              className="w-100"
            />
            <div className="d-flex  homeLine justify-content-between py-2 ">
              <h4 className=" px-2 text-muted">MultiVersus</h4>
              <button className="btn btn-primary">Free</button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
