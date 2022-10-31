import React from "react";
import "../home.css";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            zphone
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <NavLink to="/">
              <li class="nav-item">
                <a class="nav-link active" href="/" >
                  Home
                </a>
              </li>
              </NavLink>
              <NavLink to="/about">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  about
                </a>
              </li>
              </NavLink>
              

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
