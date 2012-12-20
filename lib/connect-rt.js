/*!
 * connect-rt - lib/connect-rt.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
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
 * duration in milliseconds.
 *
 * @see https://github.com/senchalabs/connect/blob/master/lib/middleware/responseTime.js
 * @return {Function(req, res, next)}
 * @api public
 */

module.exports = function responseTime() {
  return function (req, res, next) {
    var start = microtime.now();

    if (res._responseTime) {
      return next();
    }
    res._responseTime = true;

    res.on('header', function () {
      var duration = microtime.now() - start;
      res.setHeader('X-Response-Time', (duration / 1000) + 'ms');
    });

    next();
  };
};