import React from 'react'
import { NavLink } from "react-router-dom";


function B() {
  const id = localStorage.getItem("payid");


  return (
    <div>

<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">payment successful</h1>
      <p class="lead fw-normal"> your payment id {id} </p>
      <NavLink to="/">

        <a class="btn btn-outline-secondary" href="#">buy again</a>
      </NavLink>

    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

    </div>
  )
}

export default B