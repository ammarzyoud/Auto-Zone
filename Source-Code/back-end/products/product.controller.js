const express = require("express");
const router = express.Router();
const productService = require("../products/products.service");

addProduct = (req, res) => {
  productService.addProduct(req.body);
};

getProducts = (req, res) => {
  productService
    .getProducts()
    .then(products => res.json(products))
    .catch(err => next(err));
};

addToCart = (req, res) => {
  productService.addToCart(req.body);
};

getCartProductsIds = (req, res) => {
  productService
    .getCartProductsIds()
    .then(products => res.json(products))
    .catch(err => next(err));
};

getCartProducts = (req, res) => {
  productService
    .getCartProducts(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

removeFromCart = (req, res) => {
  productService
    .removeFromCart(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

// -----------------------------------------------

addToFavorite = (req, res) => {
  productService.addToFavorite(req.body);
};

getFavoritesProducts = (req, res) => {
  productService
    .getFavoritesProducts(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

getFavoritesProductsIds = (req, res) => {
  productService
    .getFavoritesProductsIds()
    .then(products => res.json(products))
    .catch(err => next(err));
};

removeFromFavorites = (req, res) => {
  productService
    .removeFromFavorites(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

// -----------------------------------------------

getCategoryProducts = (req, res) => {
  productService
    .getCategoryProducts(req.params.category)
    .then(products => res.json(products))
    .catch(err => next(err));
};

getEditProducts = (req, res) => {
  productService
    .getEditProducts(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

EditProduct = (req, res, next) => {
  console.log(req.params.id)
  productService
    .EditProduct(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

_delete = (req, res) => {
  productService
    ._delete(req.params.id)
    .then(products => res.json(products))
    .catch(err => next(err));
};

router.post("/addProduct", addProduct);
router.post("/EditProduct/:id", EditProduct);
router.get("/getProducts", getProducts);
router.get("/getEditProducts/:id", getEditProducts);
router.get("/getCategoryProducts/:category", getCategoryProducts);
router.get("/delete/:id", _delete);
// -------------------------------------------------------
router.post("/addToCart", addToCart);
router.get("/getCartProductsIds", getCartProductsIds);
router.get("/getCartProducts/:id", getCartProducts);
router.get("/removeFromCart/:id", removeFromCart);
// -------------------------------------------------------
router.post("/addToFavorite", addToFavorite);
router.get("/getFavoritesProducts/:id", getFavoritesProducts);
router.get("/getFavoritesProductsIds", getFavoritesProductsIds);
router.get("/removeFromFavorites/:id", removeFromFavorites);

module.exports = router;
