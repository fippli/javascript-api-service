const {
  NODE_ENV,
  REACT_APP_BACKEND_PORT,
  REACT_APP_BACKEND_HOST,
} = process.env;
/**
 * Get API url depending on env
 * @param {string} endpoint 
 * @returns {string}
 */
const getApiUrl = (endpoint, port = REACT_APP_BACKEND_PORT, host = REACT_APP_BACKEND_HOST) => {
  if (NODE_ENV === 'development') {
    return `http://${host || 'localhost'}:${port}${endpoint}`;
  }

  return `${endpoint}`;
};

module.exports = getApiUrl;
