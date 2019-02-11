const handleError = require('./handleError.js');
//
// Verify http response
//
const verifyResponse = (config) => {
  const moduleOptions = config.moduleOptions;

  return (response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const responseJson = response.json();
      if (moduleOptions.logResponse) {
        responseJson.then(responseData => {
          console.log("Receiving response", responseData);
        })
      }
      return responseJson;
    } else {
      handleError("Response was not JSON");
    }
  };
};
