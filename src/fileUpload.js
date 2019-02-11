const buildUrl = require('./buildUrl');
const verifyResponse = require('./verifyResponse');
const handleError = require('./handleError');
// File upload
// Outputs progress to the callback function progress
// Sets done to thefunction done.
module.exports = (config) => {
  const moduleOptions = config.moduleOptions;
  const defaultRequestOptions = config.defaultRequestOptions;

  return (endpoint, data, progress, done, options = defaultRequestOptions) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", buildUrl(endpoint, options), true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const responseJson = JSON.parse(xhr.responseText);
          done(responseJson, true);
        } else {
          done(xhr.responseText, false);
        }
      }
    };

    xhr.onerror = () => {
      done(xhr.responseText, false);
    };

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        if (moduleOptions.logRequest) {
          console.log(
            `File upload progress: ${(e.loaded/e.total)*100}%
                Uploaded: ${e.loaded}
                Total: ${e.total}
                `
          )
        }
        progress((e.loaded / e.total) * 100);
      }
    };

    xhr.send(data);

  };
};
