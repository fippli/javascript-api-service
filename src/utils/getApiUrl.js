/**
 * Get API url depending on env
 * @param {string} endpoint 
 * @returns {string}
 */
const getApiUrl = (endpoint) => {
  const {
    NODE_ENV,
    REACT_APP_BACKEND_PORT,
  } = process.env;

  if (NODE_ENV === 'development') {
    return `http://localhost:${REACT_APP_BACKEND_PORT}${endpoint}`;
  }

  return `${endpoint}`;
};

module.exports = getApiUrl;
