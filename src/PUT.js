const buildUrl = require('./buildUrl');
const verifyResponse = require('./verifyResponse');
const handleError = require('./handleError');
const createHeaders = require('./createHeaders');
//
// Put request
//
module.exports = (config) => {
  const moduleOptions = config.moduleOptions;
  const defaultRequestOptions = config.defaultRequestOptions;

  return (endpoint, data, options = defaultRequestOptions) => {
    if (moduleOptions.logRequest) {
      console.log("[PUT] Requesting", buildUrl(endpoint, options), "with data:", data)
    }
    return fetch(buildUrl(endpoint, options), {
        method: "PUT",
        headers: createHeaders(options.headers),
        body: JSON.stringify(data),
        mode: options.mode,
        credentials: options.credentials,
      })
      .then(verifyResponse(config), handleError);
  };
};
