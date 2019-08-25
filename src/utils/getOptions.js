
const getOptions = (method, body, withFile) => {
  if (body && !withFile) {
    return Object.freeze({
      method,
      body: JSON.stringify(body),
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
  });
};

module.exports = getOptions;