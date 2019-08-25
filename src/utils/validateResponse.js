/**
 * Validate incoming responses
 * @param {object} response
 * @returns {object} - HTTP response
 */
const validateResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.json().message || 'No response error message specified.');
  }
  return response;
};

module.exports = validateResponse;