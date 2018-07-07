'use strict';
let getSongInfo = require('./connectors');
let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});


// const getSongInfo = (song) =>  {
//   console.log(song);
//   let results;
//  ;


// };
const resolvers = {

  Query: {

    song: (root, {name}, context, info) => {
     
      // return spotify.search({
      //   type: 'track',
      //   query: name
      // })
      //   .then(res => res.tracks.items[0].external_urls.spotify);
    


      return  'Song query'; 
    }

    // song: (_, args) => {
    //   console.log(args);
    //   getSongInfo(args);
    //   return 'Hello world';
    // }
  },

};

module.exports = resolvers;