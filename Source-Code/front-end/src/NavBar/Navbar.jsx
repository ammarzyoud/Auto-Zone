import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default class Navbar extends Component {
  render() {
    return (
      <header id="mu-hero">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light mu-navbar">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <a className="navbar-brand mu-logo">
                <img src="assets/images/logo3.png" alt="logo" />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mu-navbar-nav">
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/Shopping"
                  >
                    Shop <i class="fa fa-shopping-bag"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/Cart"
                  >
                    Cart <i className="fa fa-shopping-cart"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/Favorites"
                  >
                    Favorites ❤
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/Profile"
                  >
                    Profile <i className="fa fa-user"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                  >
                    Logout <i class="fa fa-sign-out-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const connectedNavBar = connect()(Navbar);

{
  /* <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="blog.html"
                    role="button"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="blog.html">
                      Blog Archive
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Single
                    </a>
                  </div>
                </li> */
}
