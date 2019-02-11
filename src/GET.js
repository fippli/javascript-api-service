const buildUrl = require('./buildUrl');
const verifyResponse = require('./verifyResponse');
const handleError = require('./handleError');

//
// Get request
//
module.exports = (config) => {
  const moduleOptions = config.moduleOptions;
  const defaultRequestOptions = config.defaultRequestOptions;

  return (endpoint = "/", options = defaultRequestOptions) => {
    if (moduleOptions.logRequest) {
      console.log("[GET] Requesting", buildUrl(endpoint, options))
    }
    return fetch(buildUrl(endpoint, options), {
        method: "GET",
        credentials: options.credentials,
      })
      .then(verifyResponse(config), handleError);
  };
};
