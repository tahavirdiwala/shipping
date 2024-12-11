const ShippingMethod = require("../models/shipping.model");

class ShippingMethodService {
  async addShippingMethod(req) {
    return new Promise((resolve, reject) => {
      ShippingMethod.create(req).then(resolve).catch(reject);
    });
  }
}

module.exports = new ShippingMethodService();
