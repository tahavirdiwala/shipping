const shippingMethodService = require("../services/shipping-method.service");
const {
  ResponseMessage: { ShippingMethods: MESSAGE },
} = require("../lib/api");
const { StatusCodes } = require("../lib/constant");
const responser = require("../common/common");

class ShippingMethodController {
  async add(req, res) {
    try {
      await shippingMethodService.addShippingMethod(req.body);
      responser.sendResponse(res, StatusCodes.CREATED, MESSAGE.add);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new ShippingMethodController();
