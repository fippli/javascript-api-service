const REQUEST = require('./REQUEST');
const defaultOptions = require('./utils/defaultOptions');

/**
 * DELETE request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const DELETE = (callback, endpoint, options = defaultOptions) => {
  REQUEST(callback, 'DELETE', endpoint, options);
};

module.exports = DELETE;