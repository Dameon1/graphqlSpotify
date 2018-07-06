'use strict';


let { makeExecutableSchema } = require('graphql-tools');
let resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    song(songName: String!) : Song
    
  }
  type Song {    
    artistName: Artist!
    songTitle: String
    albumTitle: String
  }
  type Artist {
    name: String
    albums: [Albums]
  }
  type Albums {
    albumNames: String
    releaseDate: Int 
  }
`;
const schema = makeExecutableSchema({ typeDefs , resolvers});

module.exports = schema;


































  //logs the artist 
  // cl('Artist: '       + data.tracks.items[0].artists[0].name);
                  
  // //logs the "The Song Title"  
  // cl('Song title: '   + data.tracks.items[0].name);
                   
  // //link to song
  // cl('Link to song: ' + data.tracks.items[0].external_urls.spotify);
                           
  // //logs album name
  // cl('Album title: '  + data.tracks.items[0].album.name);