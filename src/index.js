const GET = require('./GET');
const POST = require('./POST');
const PUT = require('./PUT');
const DELETE = require('./DELETE');
const PATCH = require('./PATCH');
const getApiUrl = require('./utils/getApiUrl');

module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
  getApiUrl,
};