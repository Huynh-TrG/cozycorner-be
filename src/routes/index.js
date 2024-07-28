const adminRouter = require("./admin.route.js");
const siteRouter = require("./site.route.js");

function route(app) {
  app.use("/api", siteRouter);
}

module.exports = route;
