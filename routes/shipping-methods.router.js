const router = require("express").Router();
const shippingMethodController = require("../controllers/shipping-method.controller");

router.route("/shipping-methods").post(shippingMethodController.add);

module.exports = router;
