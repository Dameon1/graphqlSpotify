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
    }

  type Song {    
    artist: String
    title: String
    image: String
    songUrl: String
    }

  # type Artist {
  #   name: String
    
  #   }

  # type Albums {
  #   albumNames: String
  #   releaseDate: Int 
  # }
`;

const resolvers = {
  Query: {
    song: async (root, { name },context, info) => {
     
        console.log(name);
        const results = await spotify.search( { type: 'track', query: name } )
        
        console.log("results:",results.tracks.items.map(item => ({
         
          title:item.album.name,
        })),results.tracks.items.map(item =>item));
       // console.log(results.tracks.items);
        return results.tracks.items.map(item => ({
          image:item.album.images[1].url,
          artist:item.album.artists[0].name,
          title:item.name,
          songUrl:item.external_urls.spotify
          //songUrl:results.tracks.items[0].external_urls.spotify
        }))
      
    }
  },
  // Query: {
  //   song: async (root, { name }, context, info) => {
  //   const results = await spotify.search( { type: 'track', query: name } )
  //     console.log(results.tracks.items[0].external_urls.spotify);
  //     console.log(results.tracks.items[0])
  //         return results.tracks.items.map(item => ({
  //           artistName:item.artists[0].name
  //         }))
     
         


  //       //.then(res => res.tracks.items[0].external_urls.spotify);
  //         //res.tracks.items);
  //         //);
  //   }
  // },
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