const REQUEST = require('./REQUEST');
const defaultOptions = require('./utils/defaultOptions');

/**
 * POST request to a url 
 * that handles response and parses it to json
 * and also handles errors
 * @param {string} - Endpoint url
 * @returns {Promise} - HTTP response data as promise
 */
const POST = (callback, endpoint, options = defaultOptions) => {
  REQUEST(callback, 'POST', endpoint, options);
};

module.exports = POST;