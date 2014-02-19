TESTS = test/*.test.js
REPORTER = spec
TIMEOUT = 2500
MOCHA_OPTS =

install:
	@npm install --registry=http://r.cnpmjs.org --disturl=http://dist.u.qiniudn.com

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=html-cov | ./node_modules/.bin/cov

test-coveralls:
	@$(MAKE) test
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=mocha-lcov-reporter | ./node_modules/.bin/coveralls

test-all: test test-cov

autod: install
	@./node_modules/.bin/autod -w

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS

.PHONY: test
