import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Display from './Display';
import SongLink from './SongLink';
import Artist from './Artist'
import ArtistLink from './ArtistLink'
class App extends Component {
 
state = {
  songName:"",
  artistName:"",
  albumName:""
}

handleSongRequest(song){
    this.setState({
      songName:song,
      artistName:"",
      albumName:""
    })
  }
  handleArtistRequest(artist){
    this.setState({
      songName:"",
      artistName:artist,
      albumName:""
    })
  }
  handleAlbumRequest(album){
    this.setState({
      songName:"",
      artistName:"",
      albumName:album
    })
  }

  render() {
    return (
      <div>

      <h2 className='center'>My first Apollo app</h2>
      <div  className="topForms">
      <Form onSubmit={ (song) => this.handleSongRequest(song) }/>
      <Artist  onSubmit={ (song) => this.handleArtistRequest(song) }/>
      </div>
      <Display />
      {(this.state.songName) ? <SongLink song={this.state.songName}/> : 
      (this.state.artistName) ? <ArtistLink artist={this.state.artistName}/> : null}
      
    </div>
    );
  }
}

export default App;
