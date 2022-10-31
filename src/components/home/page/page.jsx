import React from "react";
import "../home.css";
import { NavLink } from "react-router-dom";

function Page() {


  return (
    <div>
      <div class="wrapper">
        <div class="product-img">
          <img src="./Zphone.png" height="420" width="327" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>Zphone</h1>
            <h2>by zboizz</h2>
            <p>
              {" "}
              the phone allows you to make calls !!!! <br /> best for your mom!!{" "}
            </p>
          </div>
          <div class="product-price-btn">
            <p>
              <span>10</span>$
            </p>
            {/* onClick={submit} */}
            <NavLink to="/a">
            <button type="button"  >
              buy now
            </button>
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
