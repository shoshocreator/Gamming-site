import React from "react";
import single from "../../assets/single.jpg";
import { FaSignOutAlt } from "react-icons/fa";
import scroll from "../../assets/scroll.jpg";

const SingleGame = () => {
  return (
    <section className="container SingleGame">
      <div className="row md-flex-nowrap">
        <div className="col-md-4 mx-1">
          <img src={single} className="w-100 single-pic" />
          <div className="d-flex justify-content-between singleCart">
            <button className="freeBtn text-muted  bg-dark">free</button>
            <button className=" btn btn-primary playBtn">
              play Now
              <FaSignOutAlt className="mx-2" />
            </button>
          </div>
        </div>
        <div className="col-md text-muted d-flex flex-column ">
          <h3>Enlisted </h3>
          <h4> About Enlisted</h4>
          <p className="fs-5 my-2">
            Get ready to command your own World War II military squad in Gaijin
            and Darkflow Software’s squad-based shooter Enlisted. Play as an
            infantry squad leader, tank crew, or even an aircraft pilot in a
            game where everything from the uniforms and weapons to the vehicles
            are designed with historical accuracy in mind. In Enlisted, players
            can train an equip their squad with weapons and other useful items
            before taking them into battle. Players control one soldier in their
            squad at a time, and have the ability to switch when a part of the
            squad has been defeated. When one solider is under player control,
            the rest are controlled by AI that obeys player orders. Players have
            access to four different campaigns, each associated with a specific
            real-world battle. In each instance the squads, weaponry, vehicles
            and more will appropriately correspond to each location and date.
            The game offers hundreds of realistic weapons as well as vehicles
            that World War II buffs will be familiar with. As for the squads,
            players have access to 12 different kinds of specialists. In
            addition to the soldiers that spawn naturally, players can recruit
            additional ones.
          </p>
          <h5 className="h3 my-2">Minimum System Requirements</h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">memory:</span>8 GB
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">os:</span>
            Windows 7 / 8 / 10 64bit
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">processor:</span>
            Intel Core i3 or better
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">storage :</span>
            12GB
          </h5>
          <div className="flex flex-column">
            <h5 className="h3 my-2">Enlisted Screenshots</h5>
            <div className="picScroll">
              <img src={scroll} className="w-100" />
            </div>
            <h6 className="h3 py-2">Additional Information</h6>
            <div className="row">
              <div className="col-md-4 d-flex flex-column text-danger">
                <h6 className="text-muted">Title</h6>
                <h6 className="addition"> Enlisted</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Title</h6>
                <h6 className=" addition"> Enlisted</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Title</h6>
                <h6 className=" addition"> Enlisted</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Title</h6>
                <h6 className=" addition"> Enlisted</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Title</h6>
                <h6 className=" addition"> Enlisted</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Title</h6>
                <h6 className=" addition"> Enlisted</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleGame;
