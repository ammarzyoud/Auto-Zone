import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import FilterNav from "../FilterNav/FilterNav";
import Moment from 'react-moment';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    {console.log(user);}
    return (
      <React.Fragment>
        <Navbar />
        <FilterNav />
        <div className="bg-light mx-auto p-5">
          <h1>First Name : {user.firstName}</h1>
          <h1>Last Name : {user.lastName}</h1>
          <h1>User Name : {user.username}</h1>
          <h1>Joined At : <Moment format="YYYY/MM/DD" >{user.createdDate}</Moment></h1>
          <div style={{ display: user.role == "Admin" ? "block" : "none" }}>
            <button className="btn btn-success my-2 my-sm-0 ml-2">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="AdminDashboard"
              >
                Admin Dashboard
              </Link>
            </button>
          </div>
        </div>
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

const actionCreators = {
  getUsers: userActions.getAll
};

const connectedProfile = connect(mapState, actionCreators)(Profile);
export { connectedProfile as Profile };
