const { defaultHandler } = require("./src/defaultHandler.js");
const { myServer } = require("./src/myServer.js");

const startServer = (PORT = 8000, handler = defaultHandler) =>
  myServer(PORT, handler);

module.exports = { startServer };
