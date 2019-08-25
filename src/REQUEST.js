const validateResponse = require('./utils/validateResponse');
const getResponseData = require('./utils/getResponseData');
const handleResponseError = require('./utils/handleResponseError');
const getOptions = require('./utils/getOptions');
const measureResponseTime = require('./utils/measureResponseTime');
const getApiUrl = require('./utils/getApiUrl');

/**
 * Request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {function} callback - 
 * @param {string} method - 
 * @param {string} endpoint - Endpoint url
 * @param {object} options - Request options
 */
const REQUEST = (callback, method, endpoint, options) => {
  const requestTime = performance.now();
  const url = getApiUrl(endpoint, options.port, options.host);

  fetch(url, getOptions(method, options.body, options.withFile))
    .then(validateResponse)
    .then(getResponseData)
    .then(measureResponseTime(requestTime, url, method))
    .then((data) => { callback(null, data); })
    .catch(handleResponseError(callback, method, url));
};

module.exports = REQUEST;
