'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _this = this;

require('shelljs/global');

var assert = require('assert'),
    pr = require('es6-promisify'),
    fs = require('fs-extra'),
    credentials = require('../index');

describe('Muse Credentials', function () {

  describe('#newCredentials()', function () {

    it('should create a new json and save data', function callee$2$0() {
      var token, dat;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (test('-e', 'muse.json')) rm('muse.json');
            token = 'abc13';
            context$3$0.next = 4;
            return credentials.newCredentials({ 'test': { token: token } });

          case 4:
            context$3$0.next = 6;
            return pr(fs.readJson)('muse.json');

          case 6:
            dat = context$3$0.sent;

            assert.equal('abc13', dat.test.token);

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});