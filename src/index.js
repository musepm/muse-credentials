var obj = {
  save(data, cb) {
    require('json-update').update('muse.json', data, (e) => {
      if (e) {
        console.error(`Could not save muse.json: ${e}`);
        process.exit(2);
      }
      cb();
    });
  },

  newCredentials(data) {
    obj.save(data, () => {
      console.log("Muse saved credentials.");
    });
  }    
}

module.exports = obj;
