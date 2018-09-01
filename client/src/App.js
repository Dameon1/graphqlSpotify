import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Display from './Display';
import SongLink from './SongLink';



class App extends Component {
 
  state = {
    songName: "This is America"
  }

  handleSongRequest(song){
    this.setState({
      songName:song
    })
  }

  render() {
    return (
      <div>

      <h2 className='center'>My first Apollo app</h2>
      <Form onSubmit={ (song) => this.handleSongRequest(song) }/>
      <Display />
      <SongLink song={this.state.songName}/>
    </div>
    );
  }
}

export default App;
