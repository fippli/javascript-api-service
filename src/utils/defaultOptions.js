const {
  REACT_APP_BACKEND_PORT,
  REACT_APP_BACKEND_HOST,
} = process.env;

const defaultOptions = Object.freeze({
  withFile: false,
  body: undefined,
  port: REACT_APP_BACKEND_PORT,
  host: REACT_APP_BACKEND_HOST,
});

module.exports = defaultOptions;