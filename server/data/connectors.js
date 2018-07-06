'use strict';


let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});


function getSongInfo(song)  {
   
  spotify.search({ type: 'track' || 'artist', query:  song })
    //.then(res => res.json()) 
    .then(res => console.log(res.tracks.items[0]));
  
 
}
getSongInfo('Stairway to Heaven');
module.exports = getSongInfo;