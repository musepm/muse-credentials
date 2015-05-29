'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var json = require('json-update'),
    pr = require('es6-promisify'),
    jsonUpdate = pr(json.update);

var obj = {
  save: function save(data) {
    return _regeneratorRuntime.async(function save$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return jsonUpdate('muse.json', data);

        case 2:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  },

  newCredentials: function newCredentials(data) {
    return _regeneratorRuntime.async(function newCredentials$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return obj.save(data);

        case 2:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  }

};

module.exports = obj;