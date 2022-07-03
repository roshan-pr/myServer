const parseParams = (params) => {
  const parsedParams = {};
  for (const [key, value] of params.entries()) {
    parsedParams[key] = value;
  }
  return parsedParams;
};

const parseSearchParams = (req, res, next) => {
  const method = req.method.toUpperCase();
  if (method === 'GET') {
    req.searchParams = parseParams(req.url.searchParams);
  }

  next();
};

const parseBodyParams = (req, res, next) => {
  const method = req.method.toUpperCase();
  if (method !== 'POST') {
    next();
    return;
  }

  req.setEncoding('utf8');
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    req.bodyParams = parseParams(new URLSearchParams(data));
    next();
  });
};

module.exports = { parseSearchParams, parseBodyParams };
