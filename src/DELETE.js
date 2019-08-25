const REQUEST = require('./REQUEST');

/**
 * DELETE request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const DELETE = (callback, endpoint, body = undefined) => {
  REQUEST(callback, 'DELETE', endpoint, body);
};

module.exports = DELETE;