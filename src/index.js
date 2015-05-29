var json = require('json-update'),
    pr = require('es6-promisify'),
    jsonUpdate = pr(json.update);

var obj = {
  async save(data) {
    await jsonUpdate('muse.json', data);
  },

  async newCredentials(data) {
    await obj.save(data);
  }    

}

module.exports = obj;
