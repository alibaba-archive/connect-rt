/*!
 * connect-rt - test/connect-rt.test.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var rt = require('../');
var should = require('should');
var connect = require('connect');
var request = require('supertest');

describe('connect-rt.test.js', function () {
  var app = connect(
    rt(),
    rt(), // should work
    function (req, res, next) {
      setTimeout(function () {
        res.end(req.url);
      }, 2000 * Math.random());
    }
  );

  it('should contain X-Response-time', function (done) {
    request(app)
    .get('/foo')
    .expect('X-Response-time', /\d{1,3}\.\d{1,3}ms/)
    .expect(200, done);
  });

});