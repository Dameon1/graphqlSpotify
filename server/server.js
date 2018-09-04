'use strict';

let Spotify = require('node-spotify-api');

let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0'
});

const {
  ApolloServer,
  gql
} = require('apollo-server');

const typeDefs = gql `
  type Query {
    song(name:String): [Song]
    artist(name:String):[Artist]
    albums(name:String):[Albums]
    }

  type Song {    
    artist: String
    title: String
    image: String
    songUrl: String
    }

  type Artist {
    name: String
    image:String
    artistUrl:String    
    }

  type Albums {
    albumName: String
    releaseDate: Int
    artist:String
    albumUrl:String
    albumImage:String
    
  }
`;

const resolvers = {
  Query: {
    song: async (root, { name }, context, info) => {
        const results = await spotify.search( { type: 'track', query: name } )
        return results.tracks.items.map(item => ({
          image:item.album.images[1].url,
          artist:item.album.artists[0].name,
          title:item.name,
          songUrl:item.external_urls.spotify          
        }))      
    },
    artist: async (root, { name }, context, info) => {
      const results = await spotify.search( { type: 'artist', query: name } )
      return results.artists.items.map(item => ({
       image:(item.images.length>0)?item.images[1].url:null,
       name:item.name,
       artistUrl:item.external_urls.spotify     
     }))      
    },
    albums: async (root, { name }, context, info) => {
      const results = await spotify.search( { type: 'album', query: name } )
      return results.albums.items.map(item => ({
        albumName:item.name,
        releaseDate:parseInt(item.release_date),
        artist:item.artists[0].name,
        albumUrl:item.external_urls.spotify,
        albumImage:(item.images.length>0)?item.images[1].url:null,
      }))
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
