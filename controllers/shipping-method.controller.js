const CommonDecorators = require("../common/common");
const {
  ResponseMessage: { ShippingMethods: MESSAGE },
} = require("../lib/api");
const { StatusCodes } = require("../lib/constant");

// const clinicService = require("../services/clinic.service");
class ShippingMethodController extends CommonDecorators {
  async add(req, res) {
    try {
      const clinic = await shippingMethodService.add(req);
      this.sendResponse(res, StatusCodes.OK, MESSAGE.add);
    } catch (error) {
      this.sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new ShippingMethodController();
