const router = require("express").Router();
// const clinicController = require("../controllers/clinic.controller");

router.route("/shipping-methods").post(clinicController.add);
// .get(clinicController.getAll);

// router.route("/clinic/:id").get(clinicController.get);

module.exports = router;
