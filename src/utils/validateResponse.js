/**
 * Validate incoming responses
 * @param {object} response
 * @returns {object} - HTTP response
 */
const validateResponse = async (response) => {
  try {
    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || 'No response error message specified.');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = validateResponse;