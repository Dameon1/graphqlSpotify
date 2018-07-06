'use strict';


let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});


function getSongInfo(song)  {
   console.log(song.songName);
  spotify.search({ type: 'track', query:  song.songName })
    .then(res => console.log(res.tracks.items[0].external_urls.spotify));
  
 
}
//getSongInfo('Stairway to Heaven');
module.exports = getSongInfo;