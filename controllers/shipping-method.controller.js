const shippingMethodService = require("../services/shipping-method.service");
const {
  ResponseMessage: { ShippingMethods: MESSAGE },
} = require("../lib/api");
const { StatusCodes } = require("../lib/constant");
const responser = require("../common/common");

class ShippingMethodController {
  async add(req, res) {
    try {
      await shippingMethodService.addShippingMethod(req);
      responser.sendResponse(res, StatusCodes.CREATED, MESSAGE.add);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const shippingMethods = await shippingMethodService.getAllShippingMethods(
        req
      );
      responser.sendResponse(res, StatusCodes.OK, MESSAGE.all, shippingMethods);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const shippingMethod = await shippingMethodService.getShippingMethod(req);
      responser.sendResponse(res, StatusCodes.OK, MESSAGE.get, shippingMethod);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await shippingMethodService.editShippingMethod(req);
      responser.sendResponse(res, StatusCodes.OK, MESSAGE.edit);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await shippingMethodService.deleteShippingMethod(req);
      responser.sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      responser.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new ShippingMethodController();
