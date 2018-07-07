'use strict';



let Spotify = require('node-spotify-api');
let spotify = new Spotify({
  id: '971abdb0ff9a4029ac6b44d3c3c5cdf7',
  secret: 'a25fddc921664ef0a144c65ef8089bf0',
});


const getSongInfo = (song) =>  {
  console.log(song);
  let results;
  spotify.search({ type: 'track', query:  song })
    .then(res => console.log(res.tracks.items[0].external_urls.spotify));
  
 
};

const FortuneCookie = {
  getOne() {
    return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
      .then(res => res.json())
      .then(res => {
        return res[0].fortune.message;
      });
  },
};

//getSongInfo('Stairway to Heaven');
module.exports = getSongInfo;