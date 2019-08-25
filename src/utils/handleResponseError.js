/**
 * Handle errors from incoming HTTP responses
 * @param {object} error
 */
const handleResponseError = (callback, method, endpoint) => (error) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`
    HTTP ${method} request 
    to ${endpoint} with @fippli/api-utils failed:
    ${error}
    ` );
  }
  callback(error, null);
};

module.exports = handleResponseError;