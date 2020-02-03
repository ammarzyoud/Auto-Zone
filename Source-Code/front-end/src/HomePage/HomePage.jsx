import React from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar/Navbar";
import Slider from "../Slider/Slider";
import FilterNav from "../FilterNav/FilterNav";
import WebsiteServices from "../website-serv/WebsiteServices";
import Footer from "../Footer/Footer";
import ScrollUpButton from "react-scroll-up-button";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    localStorage.setItem("role", user.role);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ScrollUpButton />
        <FilterNav />
        <Slider />
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
        {/* start who we are */}
        <section id="mu-about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-about-area">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-title">
                        <h2>Who we are</h2>
                        <p>
                          We are Auto Zone the specialist when it comes to car
                          parts a website you can trust to buy car parts from
                          where it's you car heaven
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mu-about-left">
                        <img
                          style={{ height: "400px", width: "500px" }}
                          className=""
                          src="assets/images/start-eng.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mu-about-right">
                        <ul>
                          <li>
                            <h3>Our Mission</h3>
                            <p>
                              Our Mission is to make jordan car parts market
                              bigger with more products form outside of the
                              country where you will find the best parts from
                              outside the country
                            </p>
                          </li>
                          <li>
                            <h3>Our Vision</h3>
                            <p>
                              Our Vision to be number{" "}
                              <span style={{ fontWeight: "bold" }}>1</span> in
                              car parts market where you can shop for your car
                              online with the best and finest parts and
                              accessories in the market
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End who we are */}

        {/* start you car section */}
        <div id="mu-call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-call-to-action-area">
                  <div className="mu-call-to-action-left">
                    <h2>Your car your way</h2>
                    <p>As simple as that</p>
                  </div>
                  <p className="mu-primary-btn mu-quote-btn">
                    <Link to="/Shopping">
                      Shop <i class="fa fa-shopping-bag"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End you car section */}
        <WebsiteServices />
        <Footer />
      </React.Fragment>
    );
  }
}

function mapState(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const connectedHomePage = connect(mapState)(HomePage);
export { connectedHomePage as HomePage };
