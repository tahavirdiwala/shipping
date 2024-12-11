const { connect } = require("mongoose");

const connectDB = (url) => {
  try {
    return connect(url);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
