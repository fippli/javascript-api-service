const {
  NODE_ENV,
} = process.env;
/**
 * Get API url depending on env
 * @param {string} endpoint 
 * @returns {string}
 */
const getApiUrl = (endpoint, port, host) => {
  if (NODE_ENV === 'development') {
    return `http://${host || 'localhost'}:${port}${endpoint}`;
  }

  return `${endpoint}`;
};

module.exports = getApiUrl;
