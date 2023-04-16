import React from "react";
import picLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container d-flex justify-content-between">
          <Link to="home" className="d-flex align-items-center ">
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
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="d-flex my-3 ">
              <Link to="home" className="py-2 text-muted specialNav">
                Home
              </Link>
              <Link to="all" className="py-2 text-muted  specialNav">
                All
              </Link>

              <li className="py-2  text-muted specialNav nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platform
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      pc
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      browser
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="py-2  text-muted specialNav nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  sort-by
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      release-date
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Popularity
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      alphabetical
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      relevance
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="py-2  text-muted specialNav nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Racing
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      social
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      shooter
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      open-world
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      zombie
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      fantasy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      action-rpg
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      flight
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      battle-royal
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <Link to="logIn" className="btn loginBtn  mx-3  ">
                Login
              </Link>
              <Link to="joinFree" className="joinBtn py-2 px-3">
                Join Free
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
