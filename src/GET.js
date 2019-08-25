const REQUEST = require('./REQUEST');
const defaultOptions = require('./utils/defaultOptions');

/**
 * GET request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {function} callback - Callback function
 * @param {string} endpoint - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const GET = (callback, endpoint, options = defaultOptions) => {
  REQUEST(callback, 'GET', endpoint, options);
};

module.exports = GET;