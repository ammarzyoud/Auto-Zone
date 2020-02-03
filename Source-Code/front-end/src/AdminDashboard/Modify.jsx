import React, { Component } from "react";
import config from "config";
import { authHeader } from "../_helpers";
import Navbar from "../NavBar/Navbar";
import FilterNav from "../FilterNav/FilterNav";
import { Link } from "react-router-dom";

export default class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      url: ""
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.setState({ products: data });
      return data;
    });
  }

  getProducts() {
    const requestOptions = {
      method: "GET",
      headers: authHeader()
    };
    return fetch(`${config.apiUrl}/product/getProducts`, requestOptions).then(
      this.handleResponse
    );
  }

  Delete(ID) {
    console.log(ID);
    const requestOptions = {
      method: "GET",
      headers: authHeader()
    };
    return fetch(`${config.apiUrl}/product/delete/${ID}`, requestOptions).then(
      response => {
        this.setState({ IDs: response.data });
        window.location.reload();
      }
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <FilterNav />
        {this.state.products.map(product => {
          return (
            <div class="container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded p-3 mt-2">
              <div class="row align-items-center">
                <div class="col-sm">
                  <img src={product.imgName} alt="" />
                </div>
                <div class="col-sm">
                  <p style={{ fontWeight: "bold" }}>{product.prodName}</p>
                  <p>{product.prodDesc}</p>
                  <ul>
                    <li>{product.prodFetr1}</li>
                    <li>{product.prodFetr2}</li>
                  </ul>
                </div>
                <div class="col-sm p-2">
                  <p style={{ fontWeight: "bold" }}>
                    Price : {product.prodPrice}/JOD
                  </p>
                  <button className="btn btn-primary mb-2 ml-4">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/Edit/${product._id}`}
                    >
                      Edit
                    </Link>
                  </button>
                  <br />
                  <button
                    onClick={() => this.Delete(product._id)}
                    className="btn btn-danger mb-2 ml-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
