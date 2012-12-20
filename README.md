connect-rt [![Build Status](https://secure.travis-ci.org/fengmk2/connect-rt.png)](http://travis-ci.org/fengmk2/connect-rt)
=======

![logo](https://raw.github.com/fengmk2/connect-rt/master/logo.png)

Description

* jscoverage: [100%](http://fengmk2.github.com/coverage/connect-rt.html)

## Install

```bash
$ npm install connect-rt
```

## Usage

```js
var connect = require('connect');
var rt = require('connect-rt');

var app = connect(
  rt(),
  function (req, res, next) {
    res.end('hello world');
  }
);
```

## microtime benchmark

Please see https://gist.github.com/4345606

```bash
$ node timer.js 

Date.now() x 4,290,064 ops/sec ±3.71% (84 runs sampled)
microtime.now() x 2,613,316 ops/sec ±3.58% (89 runs sampled)
process.uptime() x 311,993 ops/sec ±3.29% (84 runs sampled)
process.hrtime() x 678,040 ops/sec ±2.89% (89 runs sampled)
Fastest is Date.now()
```

## License 

(The MIT License)

Copyright (c) 2012 fengmk2 &lt;fengmk2@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.