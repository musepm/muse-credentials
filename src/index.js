require("babel").transform("code", { optional: ["runtime"] });

var json = require('json-update'),
    pr = require('es6-promisify'),
    jsonLoad = pr(json.load),
    jsonUpdate = pr(json.update);

var obj = {
  async save(data) {
    await jsonUpdate('muse.json', data);
  },

  async newCredentials(data) {
    await obj.save(data);
  },    

  async getAll(service) {
    var data = await jsonLoad('muse.json');
    return data[service];
  }
}

module.exports = obj;
