import React, { Component } from 'react';
import '../styles/App.css'
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {

    constructor(props){
      super(props)

    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
      handleFormUpdate(e){
        e.preventDefault();
        this.props.handleFormUpdate();
      }

  render(){
    return (
      <div>
        {this.props.songs.map((song) => {
          return(
            <div>
              <div key={song._id}>
                <p>User Name: {song.userName}</p>
                <p>Artist Name: {song.songArtist}</p>
                <p> Title: {song.songTitle}</p>
                <p>Notes: {song.songNotes}</p>
              </div>
          </div>

          )
      })}

      </div>

    )
  }
}
