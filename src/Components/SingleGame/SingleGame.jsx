import React, { useContext, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { ProjectContext } from "../ProjectContext/ProjectContext";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const SingleGame = () => {
  const params = useParams();
  let { GetSingleGame, Game } = useContext(ProjectContext);
  useEffect(() => {
    GetSingleGame(params.id);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="container SingleGame">
      <div className="row md-flex-nowrap g-5">
        <div className="col-lg-4">
          <img src={Game?.thumbnail} className="w-100 single-pic" />
          <div className="d-flex justify-content-between singleCart">
            <button className="freeBtn text-muted  bg-dark">free</button>
            <button className=" btn btn-primary playBtn">
              play Now
              <FaSignOutAlt className="mx-2" />
            </button>
          </div>
        </div>
        <div className="col-lg-8 text-muted d-flex flex-column ">
          <h3>{Game?.title} </h3>
          <h4> About {Game?.title}</h4>
          <p className="fs-5 my-2">{Game?.description}</p>
          <h5 className="h3 my-2">Minimum System Requirements</h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">
              memory:
              {Game?.minimum_system_requirements?.memory}
            </span>
            8 GB
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">os:</span>
            {Game?.minimum_system_requirements?.os}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">processor:</span>
            {Game?.minimum_system_requirements?.processor}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">storage :</span>
            12GB
          </h5>
          <div className="flex flex-column">
            <h5 className="h3 my-2">Enlisted Screenshots</h5>
            <div className=" picScroll">
              {/* slick */}
              <Slider {...settings}>
                {Game?.screenshots?.map((pic) => {
                  return <img src={pic.image} alt="" className="w-100" />;
                })}
              </Slider>
              {/* <img src={Game?.scroll} className="w-100" /> */}
            </div>
            <h6 className="h3 py-2">Additional Information</h6>
            <div className="row">
              <div className="col-md-4 d-flex flex-column text-danger">
                <h6 className="text-muted">Title</h6>
                <h6 className="addition"> {Game?.title}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Developer</h6>
                <h6 className=" addition"> {Game?.developer}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Publisher</h6>
                <h6 className=" addition"> {Game?.developer}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Release Data</h6>
                <h6 className=" addition"> {Game?.release_date}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Genre</h6>
                <h6 className=" addition"> {Game?.genre}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Platform</h6>
                <h6 className=" addition"> {Game?.platform}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleGame;
