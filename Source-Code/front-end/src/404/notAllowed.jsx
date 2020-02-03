import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import FilterNav from "../FilterNav/FilterNav";

export default function notAllowed() {
  return (
    <div>
      <Navbar />
      <FilterNav />
      <div id="mu-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-header-area">
                <p>
                  Oops It look like you were taken to a wrong route{" "}
                  <Link to="/">Back To Home</Link>
                </p>
                <img src="assets/images/404.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
