## 归档说明
 由于该项目及社区已长期不活跃，阿里巴巴集团决定不再维护并归档该项目。我们不建议您继续使用这个项目，以避免因为版本过时而造成的潜在风险。如果您有兴趣接手并维护该项目，可以 fork 一份并联系 opensource@alibaba-inc.com，我们会将您 fork 的仓库地址公示在这里，以指引潜在的社区贡献者。

## Archive Notice
This project community has been inactive for a long while, Alibaba Group has made the difficult decision to stop driving this project and will archive this repository. Since no more new versions will be released, we suggest you stop using this project. If you would like to take over maintaining this project, please fork this repository and contact opensource@alibaba-inc.com, we will add a link to your forked project here so that potential community developers would know. 


## 归档说明
 由于该项目及社区已长期不活跃，阿里巴巴集团决定不再维护并归档该项目。我们不建议您继续使用这个项目，以避免因为版本过时而造成的潜在风险。如果您有兴趣接手并维护该项目，可以 fork 一份并联系 opensource@alibaba-inc.com，我们会将您 fork 的仓库地址公示在这里，以指引潜在的社区贡献者。

## Archive Notice
This project community has been inactive for a long while, Alibaba Group has made the difficult decision to stop driving this project and will archive this repository. Since no more new versions will be released, we suggest you stop using this project. If you would like to take over maintaining this project, please fork this repository and contact opensource@alibaba-inc.com, we will add a link to your forked project here so that potential community developers would know. 


## 归档说明
 由于该项目及社区已长期不活跃，阿里巴巴集团决定不再维护并归档该项目。我们不建议您继续使用这个项目，以避免因为版本过时而造成的潜在风险。如果您有兴趣接手并维护该项目，可以 fork 一份并联系 opensource@alibaba-inc.com，我们会将您 fork 的仓库地址公示在这里，以指引潜在的社区贡献者。

## Archive Notice
This project community has been inactive for a long while, Alibaba Group has made the difficult decision to stop driving this project and will archive this repository. Since no more new versions will be released, we suggest you stop using this project. If you would like to take over maintaining this project, please fork this repository and contact opensource@alibaba-inc.com, we will add a link to your forked project here so that potential community developers would know. 


connect-rt [![Build Status](https://secure.travis-ci.org/fengmk2/connect-rt.png)](http://travis-ci.org/fengmk2/connect-rt) [![Coverage Status](https://coveralls.io/repos/fengmk2/connect-rt/badge.png)](https://coveralls.io/r/fengmk2/connect-rt)
=======

![logo](https://raw.github.com/fengmk2/connect-rt/master/logo.png)

connect response time middleware, include micro second.

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
  // rt({headerName: 'X-ReadTime'}), // you can change the header name
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

Copyright (c) 2012 - 2014 fengmk2 &lt;fengmk2@gmail.com&gt;

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
