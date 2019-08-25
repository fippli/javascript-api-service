const REQUEST = require('./REQUEST');

/**
 * GET request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {function} callback - Callback function
 * @param {string} endpoint - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const GET = (callback, endpoint) => {
  REQUEST(callback, 'GET', endpoint);
};

module.exports = GET;