import React, { Component } from "react";
import { connect } from "react-redux";
import config from "config";
import { authHeader } from "../_helpers";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import FilterNav from "../FilterNav/FilterNav";
import { Link } from "react-router-dom";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      IDs: []
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.handleProductResponse = this.handleProductResponse.bind(this);
    this.getFavoritesProductsIds = this.getFavoritesProductsIds.bind(this);
    this.getFavoritesProducts = this.getFavoritesProducts.bind(this);
  }

  componentDidMount() {
    this.getFavoritesProductsIds();
  }

  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.setState({ IDs: data });
      this.getFavoritesProducts();
      return data;
    });
  }

  handleProductResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.setState({ products: [...this.state.products, data] });
      return data;
    });
  }

  removeDup(arr, param) {
    return arr.filter((item, i, array) => {
      return (
        array
          .map(mapItem => {
            return mapItem[param];
          })
          .indexOf(item[param]) === i
      );
    });
  }

  abort() {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }

  getFavoritesProducts() {
    const { IDs } = this.state;
    let newIDs = this.removeDup(IDs, "prodID");
    newIDs.forEach(ID => {
      const requestOptions = {
        method: "GET",
        headers: authHeader()
      };
      return fetch(
        `${config.apiUrl}/product/getFavoritesProducts/${ID.prodID}`,
        requestOptions
      ).then(this.handleProductResponse);
    });
  }

  getFavoritesProductsIds() {
    const requestOptions = {
      method: "GET",
      headers: authHeader()
    };
    return fetch(
      `${config.apiUrl}/product/getFavoritesProductsIds`,
      requestOptions
    ).then(this.handleResponse);
  }

  removeFromFavorites(ID) {
    const requestOptions = {
      method: "GET",
      headers: authHeader()
    };
    return fetch(
      `${config.apiUrl}/product/removeFromFavorites/${ID}`,
      requestOptions
    ).then(response => {
      this.setState({ IDs: response.data });
      window.location.reload();
    });
  }

  addToCart(ID) {
    let obj = { id: ID };
    const requestOptions = {
      method: "POST",
      headers: { ...authHeader(), "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    };
    return fetch(`${config.apiUrl}/product/addToCart`, requestOptions).then(
      this.handleCartResponse
    );
  }

  showProducts() {
    if (this.state.products.length > 0) {
      return this.state.products.map(product => {
        return (
          <div id="productContainer" class="container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded p-3 mt-2">
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
                <button
                  onClick={() => this.addToCart(product._id)}
                  className="btn btn-primary mb-2 ml-4"
                >
                  Add to Cart <i class="fa fa-opencart"></i>
                </button>
                <br />
                <button
                  onClick={() => this.removeFromFavorites(product._id)}
                  className="btn btn-danger mb-2 ml-4"
                >
                  Remove from favorite
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div
          className="mx-auto mt-5"
          style={{ width: "200px", marginBottom: "100px" }}
        >
          <div id="mu-page-header">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-page-header-area">
                    <img src="assets/images/noproduct.png" alt="" />
                    <button className="btn btn-primary mb-2 ml-4">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Shopping"
                      >
                        {" "}
                        Go Shopping
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <FilterNav />
        {this.showProducts()}
        <Footer />
      </React.Fragment>
    );
  }
}

const connectedFavorites = connect()(Favorites);
export { connectedFavorites as Favorites };
