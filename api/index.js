'use strict';

// Forward all requests to the existing Express app without creating an HTTP server
// This lets the app run as a Vercel Serverless Function.

const app = require('../src/app');

module.exports = (req, res) => {
  return app(req, res);
};
