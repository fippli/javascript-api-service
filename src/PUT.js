const REQUEST = require('./REQUEST');
const defaultOptions = require('./utils/defaultOptions');

/**
 * PUT request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const PUT = (callback, endpoint, options = defaultOptions) => {
  REQUEST(callback, 'PUT', endpoint, options);
};

module.exports = PUT;