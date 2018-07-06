'use strict';


import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    song(songName: String!) : Song!
    
  }
  type Song {
    songName: String
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
    releaseDate: Number 
  }
`;
const schema = makeExecutableSchema({ typeDefs , resolvers});

export default schema;


































  //logs the artist 
  // cl('Artist: '       + data.tracks.items[0].artists[0].name);
                  
  // //logs the "The Song Title"  
  // cl('Song title: '   + data.tracks.items[0].name);
                   
  // //link to song
  // cl('Link to song: ' + data.tracks.items[0].external_urls.spotify);
                           
  // //logs album name
  // cl('Album title: '  + data.tracks.items[0].album.name);