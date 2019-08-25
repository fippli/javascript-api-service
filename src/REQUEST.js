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
 * @param {object} body - 
 * @returns {Promise} - HTTP response data as promise
 */
const REQUEST = (callback, method, endpoint, body = undefined, withFile = false) => {
  const requestTime = performance.now();
  const url = getApiUrl(endpoint);

  fetch(url, getOptions(method, body, withFile))
    .then(validateResponse)
    .then(getResponseData)
    .then(measureResponseTime(requestTime, url, method))
    .then((data) => { callback(null, data); })
    .catch(handleResponseError(callback, method, url));
};

module.exports = REQUEST;
