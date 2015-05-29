var assert = require("assert");
require('shelljs/global');
var fs = require('fs-extra');
var credentials = require('../lib/index')

describe('Muse Credentials', () =>{
  describe('#newCredentials()', () =>{
    it('should create a new json and save data', (dn) => {
      rm('muse.json');
      var token = 'abc13';
      credentials.newCredentials({'test': {token}}, () => {
        var dat = fs.readJsonSync('muse.json');
        assert.equal('abc13', dat.test.token);
:w
        dn();
     })

    /* it('should update json file if exists', (dn) => {
      
    }); */
  })
})

