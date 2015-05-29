require('shelljs/global');

var assert = require("assert"),
    pr = require('es6-promisify'),
    fs = require('fs-extra'),
    credentials = require('../index');

describe('Muse Credentials', () =>{

  describe('#newCredentials()', () =>{

    it('should create a new json and save data', async () => {
      if (test('-e', 'muse.json')) rm('muse.json');
      var token = 'abc13';
      await credentials.newCredentials({'test': {token}});
      var dat = await pr(fs.readJson)('muse.json');
      assert.equal('abc13', dat.test.token);
    });
  })
})

