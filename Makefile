TESTS = test/*.test.js
REPORTER = spec
TIMEOUT = 2500
JSCOVERAGE = ./node_modules/jscover/bin/jscover

install:
	@npm install

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(TESTS)

test-cov: install lib-cov
	@CONNECT_RT_COV=1 $(MAKE) test REPORTER=dot
	@CONNECT_RT_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

lib-cov:
	@rm -rf $@
	@$(JSCOVERAGE) lib $@

.PHONY: test-cov test lib-cov install
