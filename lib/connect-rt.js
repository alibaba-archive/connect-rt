/*!
 * connect-rt - lib/connect-rt.js
 * Copyright(c) 2012 - 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var microtime = require('microtime');

/**
 * Reponse time:
 *
 * Adds the `X-Response-Time` header displaying the response
 * duration in microsecond (μs).
 *
 * @see https://github.com/senchalabs/connect/blob/master/lib/middleware/responseTime.js
 * @return {Function(req, res, next)}
 * @api public
 */

module.exports = function responseTime(options) {
  options = options || {};
  var headerName = options.headerName || 'X-Response-Time';
  return function (req, res, next) {
    if (res._responseStartTime) {
      return next();
    }
    var start = res._responseStartTime = microtime.now();

    res.on('header', function () {
      var duration = microtime.now() - start;
      res.setHeader(headerName, duration);
    });

    next();
  };
};
