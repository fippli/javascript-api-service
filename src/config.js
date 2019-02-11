const config = {
  moduleOptions: {
    logResponse: false,
    logRequest: false,
  },
  defaultRequestOptions: {
    mode: 'cors',
    credentials: 'include',
  },
};

const setModuleOption = (option, value) => {
  config.moduleOptions[option] = value;
};

const apiConfig = (host, port) => {
  config.defaultRequestOptions.host = host;
  config.defaultRequestOptions.port = port;
};

const configureRequestOptions = newOptions => {
  config.defaultRequestOptions = newOptions;
};


module.exports = {
  config: config,
  setModuleOption: setModuleOption,
  apiConfig: apiConfig,
  configureRequestOptions: configureRequestOptions,
}
