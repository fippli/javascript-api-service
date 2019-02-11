const config = require('./src/config.js');

module.exports = {
  GET: require('./src/GET.js')(config.config),
  PUT: require('./src/PUT.js')(config.config),
  POST: require('./src/POST.js')(config.config),,
  DELETE: require('./src/DELETE.js')(config.config),
  buildUrl: require('./src/buildUrl'),
  configureRequestOptions: config.configureRequestOptions,
  apiConfig: config.apiConfig,
  setModuleOption: config.setModuleOption,
  fileUpload: require('./src/fileUpload')(config.config),
};
