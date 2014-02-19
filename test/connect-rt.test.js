/*!
 * connect-rt - test/connect-rt.test.js
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var connect = require('connect');
var request = require('supertest');
var rt = require('../');

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
    .expect('X-Response-time', /^\d+$/)
    .expect(200, done);
  });

  var app2 = connect(
    rt({headerName: 'X-ReadTime'}),
    function (req, res, next) {
      res.end(req.url);
    }
  );

  it('should contain custom header: X-ReadTime', function (done) {
    request(app2)
    .get('/foo')
    .expect('X-ReadTime', /^\d+$/)
    .expect(200, done);
  });

});
