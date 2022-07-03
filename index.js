const { defaultHandler } = require("./src/defaultHandler.js");
const { myServer } = require("./src/myServer.js");
const { parseBodyParams, parseSearchParams } = require("./src/parseParams.js");
const { createAsyncRouter } = require("./src/router.js");

const startServer = (PORT = 8000, handler = defaultHandler) =>
  myServer(PORT, handler);

module.exports = {
  startServer,
  createAsyncRouter,
  parseSearchParams,
  parseBodyParams
};
