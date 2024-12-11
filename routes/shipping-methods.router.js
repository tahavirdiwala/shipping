const router = require("express").Router();
const shippingMethodController = require("../controllers/shipping-method.controller");

router
  .route("/shipping-methods")
  .post(shippingMethodController.add)
  .get(shippingMethodController.getAll);

router
  .route("/shipping-methods/:id")
  .get(shippingMethodController.get)
  .put(shippingMethodController.edit)
  .delete(shippingMethodController.delete);

module.exports = router;
