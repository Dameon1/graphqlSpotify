import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Display from './Display';
import SongLink from './SongLink';
import Artist from './Artist'
import ArtistLink from './ArtistLink'
import Album from './Album'
import AlbumLink from './AlbumLink';
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
      <Artist  onSubmit={ (artist) => this.handleArtistRequest(artist) }/>
      <Album  onSubmit={ (album) => this.handleArtistRequest(album) }/>
      </div>
      <Display />
      {(this.state.songName) ? <SongLink song={this.state.songName}/> : 
      (this.state.artistName) ? <ArtistLink artist={this.state.artistName}/> :
      (this.state.albumName) ? <AlbumLink artist={this.state.albumName}/> : null}
      
    </div>
    );
  }
}

export default App;
