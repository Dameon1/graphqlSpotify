'use strict';
let getSongInfo  = require('./connectors');

const resolvers = {

  Query: {
    
    song(_, args) {
      console.log(args);
      getSongInfo(args);
        
    }
  }
};

module.exports = resolvers;