const headers = require('./headers');

const getOptions = (method, body, withFile) => {
  if (body && !withFile) {
    return Object.freeze({
      method,
      body: JSON.stringify(body),
      headers,
    });
  }

  if (body && withFile) {
    return Object.freeze({
      method,
      body,
    });
  }

  return Object.freeze({
    method,
    headers,
  });
};

module.exports = getOptions;