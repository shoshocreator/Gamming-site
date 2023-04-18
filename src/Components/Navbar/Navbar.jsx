import React, { useContext } from "react";
import picLogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../ProjectContext/ProjectContext";

const Navbar = () => {
  let Navigate = useNavigate();
  const { userData } = useContext(ProjectContext);
  function logout() {
    localStorage.removeItem("userToken");
    Navigate("/logIn");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="d-flex align-items-center ">
            <img src={picLogo} className="logoPic" />
            <p className="navbar-brand text-white d-block p-0 m-0">Game over</p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="d-flex my-3 ">
              {userData ? (
                <>
                  <Link to="/" className="py-2 text-muted specialNav">
                    Home
                  </Link>
                  <Link to="all" className="py-2 text-muted  specialNav">
                    All
                  </Link>

                  <li className="py-2  text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Platform
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/Platforms/pc">
                          pc
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Platforms/browser">
                          browser
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="py-2  text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      sort-by
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/sortBy/release-date"
                        >
                          release-date
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sortBy/Popularity">
                          Popularity
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/sortBy/alphabetical"
                        >
                          alphabetical
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sortBy/relevance">
                          relevance
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="py-2  text-muted specialNav nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      categories
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/categories/racing">
                          racing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categories/sports">
                          sports
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categories/social">
                          social
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categories/shooter"
                        >
                          shooter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categories/ open-world"
                        >
                          open-world
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categories/zombie">
                          zombie
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categories/fantasy"
                        >
                          fantasy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categories/action-rpg"
                        >
                          action-rpg
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categories/action">
                          action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categories/flight">
                          flight
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categories/battle-royale"
                        >
                          battle-royale
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <form className="d-flex " role="search">
              {userData ? (
                <button onClick={logout} className="joinBtn py-2 px-3">
                  log out
                </button>
              ) : (
                <>
                  <Link to="logIn" className="btn loginBtn  mx-3  ">
                    Login
                  </Link>
                  <Link to="joinFree" className="joinBtn py-2 px-3">
                    Join Free
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
