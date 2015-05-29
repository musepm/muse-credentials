'use strict';

var obj = {
  save: function save(data, cb) {
    require('json-update').update('muse.json', data, function (e) {
      if (e) {
        console.error('Could not save muse.json: ' + e);
        process.exit(2);
      }
      cb();
    });
  },

  newCredentials: function newCredentials(data) {
    obj.save(data, function () {
      console.log('Muse saved credentials.');
    });
  }
};

module.exports = obj;