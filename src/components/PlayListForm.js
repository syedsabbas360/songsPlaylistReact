import React, {Component} from 'react';
import PlayList from './PlayList';

export default class PlayListForm extends Component {
  constructor(props){
    super(props)
     this.state = {
       songs: [],
       userName: '',
       songArtist: '',
       songTitle:'',
       songNotes: ''
     }

this.handleUserName = this.handleUserName.bind(this)
this.handleArtistChange = this.handleArtistChange.bind(this)
this.handleTitleChange = this.handleTitleChange.bind(this)
this.handleNotesChange = this.handleNotesChange.bind(this)
this.addToList = this.addToList.bind(this)

}


fetchData(){
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
    return results.json();
  }).then(data => {
    this.setState({songs: data});
    console.log("state", this.state.songs);
  })
}

componentDidMount(){
  this.fetchData()
}

handleUserName(event){
  this.setState({
    userName : event.target.value,
  })
}


handleArtistChange(event){
  this.setState({
    songArtist : event.target.value,
  })
}

handleTitleChange(event){
  songTitle: event.target.value
}

handleNotesChange(event){
  songNotes: event.target.value
}

addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

  render() {


    return (

        <div className="form">
          <form>
            <input type='text' name='userName'value ='User Name'/>
            <input type='text' name='songArtist'value ='Song Artist'/>
            <input type='text' name='songTitle'value ='Song Title'/>
            <input type='text' name='songNotes'value ='Song Notes'/>
          </form>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <PlayList handleUpdate={this.fetchData} songs={this.state.songs} />
          </div>


      )
    }
  }
