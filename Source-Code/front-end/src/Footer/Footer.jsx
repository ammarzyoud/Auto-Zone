import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="mu-footer">
          <div className="mu-footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="mu-single-footer">
                    <img
                      className="mu-footer-logo"
                      src="assets/images/logo3.png"
                      alt="logo"
                    />
                    <p>
                      Auto Zone one from the first car parts websites in jordan
                      with a big inventory of car parts new and modren parts found on the website
                      <br/>
                      Founded and created by Ammar Alzyoud
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mu-single-footer">
                    <h3>Find Us On</h3>
                  </div>
                  <div className="mu-social-media">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="mu-twitter" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="mu-pinterest" href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                    <a className="mu-google-plus" href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="mu-youtube" href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mu-single-footer">
                    <h3>Contact Information</h3>
                    <ul className="list-unstyled">
                      <li className="media">
                        <span className="fa fa-home"></span>
                        <div className="media-body">
                          <p>Jordan,Amman , Abdali Branch</p>
                        </div>
                      </li>
                      <li className="media">
                        <span className="fa fa-phone"></span>
                        <div className="media-body">
                          <p>+962 778462000</p>
                          <p>+962 5191900</p>
                        </div>
                      </li>
                      <li className="media">
                        <span className="fa fa-envelope"></span>
                        <div className="media-body">
                          <p>Auto.Zone@gmail.com</p>
                          <p>ammar.m.alzyoud@gmail.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mu-footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-footer-bottom-area">
                    <p className="mu-copy-right">
                      &copy; Copyright Auto Zone. All right reserved 2020.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
