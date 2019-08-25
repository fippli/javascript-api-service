const getResponseData = (response) => {
  try {
    return response.json();
  } catch {
    throw new Error('Response data is not JSON. This error is probably unhandeled on the server.');
  }
};

module.exports = getResponseData;