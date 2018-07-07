'use strict';
let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});
const {
  ApolloServer,
  gql
} = require('apollo-server');

const typeDefs = gql `
  type Query {
    song(name:String): String
    }

  type Song {    
    artistName: Artist
    songTitle: String
    albumTitle: String
    songUrl: String
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

const resolvers = {

  Query: {

    song: (root, {
      name
    }, context, info) => {

      return spotify.search({
        type: 'track',
        query: name
      })
        .then(res => res.tracks.items[0].external_urls.spotify);
      //return 'Song query';
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});



server.listen()
  .then(({
    url
  }) => {
    console.log(`🚀 Server ready at ${url}`);
  });







// let express = require('express');
// let GraphQLHTTP = require('express-graphql');
// let schema = require('./data/schema');

// const app = express();
// const PORT = 4000;

// app.use('/graphql', GraphQLHTTP({
//   schema,
//   graphiql:true
// })
// );
// app.listen(PORT, () => {
//   console.log('Node/Express serrver for graphQL App. Listening on port: ', PORT);
// });