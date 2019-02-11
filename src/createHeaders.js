module.exports = (newHeaders = {}) => ({
  'content-type': 'application/json',
  ...newHeaders,
});
