const { response } = require("express");
const fs = require("fs");

class CommonDecorators {
  /**
   * Sends a JSON response with a status code, message, and optional data.
   * @param {response} response - Express response object.
   * @param {number} statusCode - HTTP status code.
   * @param {string} dispatch - Dispatch Response message.
   * @param {Array|null} [data=null] - Optional response data.
   * @returns {void} response json
   */
  sendResponse(response, statusCode, dispatch, data = null) {
    if (dispatch["message"]) dispatch = dispatch["message"];
    response
      .status(statusCode)
      .json({ statusCode, message: dispatch, ...(data && { data }) });
  }
  /**
   * @param {string} dir - current directory for files.
   * @returns {string[]} all files inside current directory
   */
  getFiles(dir) {
    return fs.readdirSync(dir);
  }
}

module.exports = CommonDecorators;
