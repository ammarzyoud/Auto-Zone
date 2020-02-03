import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="register">
        <div className="row">
          <div className="col-md-3 register-left">
            <h3>Welcome</h3>
            <p>
              You are 30 seconds away from the most premium online car parts in
              jordan
            </p>
            <img src="assets/images/logo4.png" alt="" style={{height: "25%"}} />
            <Link to="/login">
              <input type="submit" name="" value="Login" />
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form name="form" onSubmit={this.handleSubmit} width="100%">
                  <h3 className="register-heading">Register For Auto Zone</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div
                        className={
                          "form-group" +
                          (submitted && !user.firstName ? " has-error" : "")
                        }
                      >
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={user.firstName}
                          onChange={this.handleChange}
                        />
                        {submitted && !user.firstName && (
                          <small className="help-block">
                            First Name is required
                          </small>
                        )}
                      </div>
                      <div
                        className={
                          "form-group" +
                          (submitted && !user.lastName ? " has-error" : "")
                        }
                      >
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={user.lastName}
                          onChange={this.handleChange}
                        />
                        {submitted && !user.lastName && (
                          <small className="help-block">
                            Last Name is required
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={
                          "form-group" +
                          (submitted && !user.username ? " has-error" : "")
                        }
                      >
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={user.username}
                          onChange={this.handleChange}
                        />
                        {submitted && !user.username && (
                          <small className="help-block">
                            Username is required
                          </small>
                        )}
                      </div>
                      <div
                        className={
                          "form-group" +
                          (submitted && !user.password ? " has-error" : "")
                        }
                      >
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={user.password}
                          onChange={this.handleChange}
                        />
                        {submitted && !user.password && (
                          <small className="help-block">
                            Password is required
                          </small>
                        )}
                      </div>
                    </div>
                    <button className="btnRegister">Register</button>
                    {registering && (
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
