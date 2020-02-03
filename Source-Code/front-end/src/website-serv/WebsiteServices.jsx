import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteServices extends Component {
  render() {
    return (
      <div>
        <section id="mu-service">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-service-area">
                  {/* <!-- Title --> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-title">
                        <h2>Our categories and products</h2>
                        <p>What you will find on the website</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Start Service Content --> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-service-content">
                        <div className="row">
                          {/* <!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Accessories">Accessories</Link>
                                </h3>
                                <p>
                                  most modren unique Accessories in the market
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service -->
											<!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Interior">Interior</Link>
                                </h3>
                                <p>Interior parts and modren enw featuers</p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service -->
											<!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>{" "}
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Exterior">Exterior</Link>
                                </h3>
                                <p>Exterior parts and modefecations</p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service -->
											<!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Body">Body</Link>
                                </h3>
                                <p>
                                  Body parts are the best thing to give your car
                                  a special look
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service -->
											<!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Preformance">Preformance</Link>
                                </h3>
                                <p>
                                  Preformance parts to keep your car healthy and
                                  running like new
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service -->
											<!-- Start single service --> */}
                          <div className="col-md-4">
                            <div className="mu-single-service">
                              <div className="mu-single-service-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                              </div>
                              <div className="mu-single-service-content">
                                <h3>
                                  <Link to="/Audio">
                                    Audio
                                  </Link>
                                </h3>
                                <p>
                                  Audio is the best thing to have with you on a road trip make sure you have a good system 
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End single service --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Service Content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services --> */}
      </div>
    );
  }
}
