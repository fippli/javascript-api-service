//
// Used to build the URL of the request.
//
module.exports = (config) => {
  const defaultRequestOptions = config.defaultRequestOptions;

  return (endpoint, options = defaultRequestOptions) => {
    // Port is required for localhost
    if (options.host === "localhost" && !options.port) {
      throw new Error(`You need to specify a port when host is set to "localhost".`)
    }
    return `${options.host ? `http://${options.host}${options.port ? `:${options.port}` : ""}` : ""}${endpoint}`
  };
};
