'use strict';
let { getSongInfo } = require('./connectors');

const resolvers = {

  Query: {
    song(_, args) {
      return getSongInfo(args);
    }
  }
};

module.exports = resolvers;