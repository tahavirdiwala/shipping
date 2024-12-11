const { Express } = require("express");
const routers = require("./main.router");

/**
 * Apply routes for specified routers.
 * @param {Express} app - Express routes configuration object.
 */

function routes(app) {
  const defaultRoute = "/api";
  app.use(defaultRoute, routers); // for all routes
}

module.exports = routes;
