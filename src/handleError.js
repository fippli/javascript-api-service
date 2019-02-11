//
// Handle response error
//
module.exports = (error) => {
  const errorMessage = `
        Error [@fippli/api-utils]:
        API request failed:
        ${error}
    `;
  throw new Error(errorMessage);
};
