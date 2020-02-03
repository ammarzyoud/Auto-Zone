import React, { Component } from "react";
import Navbar from "../NavBar/Navbar";
import storage from "../Firebase/index";
import { authHeader } from "../_helpers";
import config from "config";
import FilterNav from "../FilterNav/FilterNav";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      progress: 0,
      uploaded: false,
      ID:"",
      product: {
        imageName: "",
        prodName: "",
        prodDesc: "",
        prodFetr1: "",
        prodFetr2: "",
        category: "",
        prodPrice: ""
      },
      display: "none",
      imgError: "none"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleEditProduct = this.handleEditProduct.bind(this);
    this.handleGetResponse = this.handleGetResponse.bind(this);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const requestOptions = {
      method: "GET",
      headers: authHeader()
    };
    return fetch(
      `${config.apiUrl}/product/getEditProducts/${params.id}`,
      requestOptions
    ).then(this.handleGetResponse);
  }

  handleGetResponse(response) {
    const { product } = this.state;
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.setState({
        ID: data[0]._id,
        product: {
          ...product,
          prodName: data[0].prodName,
          prodDesc: data[0].prodDesc,
          prodFetr1: data[0].prodFetr1,
          prodFetr2: data[0].prodFetr2,
          category: data[0].category,
          prodPrice: data[0].prodPrice
        }
      });
      return data;
    });
  }

  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }

  handleChangeText(e) {
    const { name, value } = e.target;
    const { product } = this.state;
    e.preventDefault();
    this.setState({
      product: {
        ...product,
        [name]: value
      }
    });
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      const Image = e.target.files[0];
      this.setState({ image: Image });
    }
  }

  handleUpload(event) {
    const { image, product } = this.state;
    event.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
        this.setState({ uploaded: true });
      },
      error => {
        // Error function ...
        console.log(error);
      }
    );
    storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(url => {
        this.setState({
          product: {
            ...product,
            imageName: url
          }
        });
      });
    this.setState({ imgError: "none" });
  }

  handleEditProduct(event) {
    console.log(this.state.ID);
    event.preventDefault();
    if (this.state.uploaded === true) {
      const { product,ID } = this.state;
      const requestOptions = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify(product)
      };
      return fetch(`${config.apiUrl}/product/EditProduct/${ID}`, requestOptions).then(
        this.handleResponse,
        this.setState({display:"block"})
      );
    } else {
      this.setState({imgError:"block"})
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <FilterNav />
        <div className="container">
          <h1 className="mt-4">Edit page</h1>
          <form className="mt-5">
            <hr />
            {/* ------------------------------------------------------------ */}
            <div className="form-inline">
              <div className="form-group mb-2 mr-4">
                <label htmlFor="Image">Product Image</label>
                <input
                  id="Image"
                  className="form-control w-25 p-1 ml-3"
                  type="file"
                  onChange={this.handleChange}
                  required
                />
                <button
                  onClick={this.handleUpload}
                  className="btn btn-primary mb-2 ml-4"
                >
                  Upload Image
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <progress
                value={this.state.progress}
                max="100"
                className="progress ml-3"
              />
            </div>
            <small>
              Please wait untill image is uploaded befor you add the rest of the
              product
            </small>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: this.state.imgError }}
            >
              please add an image First
            </div>
            <hr />
            {/* ------------------------------------------------------------ */}
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                name="prodName"
                className="form-control w-25"
                id="productName"
                placeholder="Enter Product Name"
                value={this.state.product.prodName}
                onChange={this.handleChangeText}
                required
              />
            </div>
            {/* ------------------------------------------------------------ */}
            <div className="form-group">
              <label htmlFor="productDes">Product Descreption</label>
              <textarea
                type="text"
                name="prodDesc"
                className="form-control w-50"
                id="productDes"
                placeholder="Product Descreption"
                value={this.state.product.prodDesc}
                onChange={this.handleChangeText}
                required
              />
            </div>
            {/* ------------------------------------------------------------ */}
            <p>Product Features</p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="productFeature1">Product Feature 1</label>
                <input
                  type="text"
                  name="prodFetr1"
                  className="form-control"
                  id="productFeature1"
                  placeholder="Enter First Product Feature"
                  value={this.state.product.prodFetr1}
                  onChange={this.handleChangeText}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="productFeature1">Product Feature 2</label>
                <input
                  type="text"
                  name="prodFetr2"
                  className="form-control"
                  id="productFeature2"
                  placeholder="Enter Second Product Feature"
                  value={this.state.product.prodFetr2}
                  onChange={this.handleChangeText}
                  required
                />
              </div>
            </div>
            {/* ------------------------------------------------------------ */}
            <p>Product Category</p>
            <select
              className="form-control"
              name="category"
              onChange={this.handleChangeText}
            >
              <option disabled selected value>
                select a category
              </option>
              <option value="Interior">Interior</option>
              <option value="Exterior">Exterior</option>
              <option value="Accessories">Accessories</option>
              <option value="Body">Body</option>
              <option value="Preformance">Preformance</option>
              <option value="Audio">Audio</option>
            </select>
            {/* ------------------------------------------------------------ */}
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="number"
                name="prodPrice"
                className="form-control w-25"
                id="productPrice"
                placeholder="Enter Product Price"
                value={this.state.product.prodPrice}
                onChange={this.handleChangeText}
                required
              />
            </div>
            {/* ------------------------------------------------------------ */}
            <div
              className="alert alert-success"
              role="alert"
              style={{ display: this.state.display }}
            >
              Product Updated successfully
            </div>
            <button
              onClick={this.handleEditProduct}
              className="btn btn-primary m-3"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
