const ShippingMethod = require("../models/shipping.model");

class ShippingMethodService {
  async addShippingMethod(req) {
    return new Promise((resolve, reject) => {
      ShippingMethod.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAllShippingMethods(req) {
    return new Promise((resolve, reject) => {
      const queryFilters = {
        ...req.query,
        ...((req.query.provider || "").length > 0 && {
          shipping_provider: req.query.provider,
        }),
      };

      delete queryFilters["provider"];

      ShippingMethod.find(queryFilters).then(resolve).catch(reject);
    });
  }

  async getShippingMethod(req) {
    return new Promise((resolve, reject) => {
      ShippingMethod.findOne({ _id: req.params.id })
        .then(resolve)
        .catch(reject);
    });
  }

  async editShippingMethod(req) {
    return new Promise(async (resolve, reject) => {
      const id = req.params.id;
      const shippingMethod = await ShippingMethod.findOne({ _id: id });

      if (Object.keys(shippingMethod).length > 0) {
        ShippingMethod.findByIdAndUpdate(req.params.id, req.body)
          .then(resolve)
          .catch(reject);
      } else {
        reject("Shipping method with given id does not exist");
      }
    });
  }

  async deleteShippingMethod(req) {
    return new Promise(async (resolve, reject) => {
      const id = req.params.id;
      const shippingMethod = await ShippingMethod.findOne({ _id: id });

      if (Object.keys(shippingMethod).length > 0) {
        ShippingMethod.findByIdAndDelete(req.params.id)
          .then(resolve)
          .catch(reject);
      } else {
        reject("Shipping method with given id does not exist");
      }
    });
  }
}

module.exports = new ShippingMethodService();
