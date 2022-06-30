const { createServer } = require('http');

const myServer = function (PORT, handler) {
  const server = createServer((req, res) => {
    req.url = new URL(req.url, 'http://' + req.headers.host);
    handler(req, res);
  });

  server.listen(PORT, () => console.log(`Listening to port : ${PORT}`))
};

module.exports = { myServer };
