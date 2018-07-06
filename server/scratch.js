'use strict';

let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});
let nodeArgs = process.argv;


//exports the key for twitter(client), and spotify(spotify)
module.exports = {
  spotify,
};

let cl = (data) => {
  console.log(data);
};
let artistName;
let songName;
      
//this line uses my personal API key to get song information
spotify.search({ type: 'track' || 'artist', query: artistName || songName }, function(error, data) {
  //if there is an error, report it to the user
  if (error) {
    return cl('There was a problem occuring at: ' + error);
  }
 
  //logs the artist 
  cl('Artist: '       + data.tracks.items[0].artists[0].name);
                  
  //logs the "The Song Title"  
  cl('Song title: '   + data.tracks.items[0].name);
                   
  //link to song
  cl('Link to song: ' + data.tracks.items[0].external_urls.spotify);
                           
  //logs album name
  cl('Album title: '  + data.tracks.items[0].album.name);
                           
  //stop line for identification purposes
  cl('\n-----------------');
});
//closes out the undefined song information
  

