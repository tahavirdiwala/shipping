require("dotenv").config();
const fs = require("fs");

const getEnvConfig = (key) => {
  if (process.env[key]) return process.env[key];
  else throw new Error("env key does not exist");
};

/**
 * @param {string} dir - current directory for files.
 * @returns {string[]} all files inside current directory
 */
const getFiles = (dir) => {
  return fs.readdirSync(dir);
};
module.exports = {
  getEnvConfig,
  getFiles,
};
