const REQUEST = require('./REQUEST');

/**
 * PUT request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const PUT = (callback, endpoint, body = undefined, withFile = false) => {
  REQUEST(callback, 'PUT', endpoint, body, withFile);
};

module.exports = PUT;