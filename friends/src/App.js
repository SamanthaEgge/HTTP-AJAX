import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}))
        })
        .catch(error => {
            console.error('Server Error', error);
        });
  }

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addAFriend = event => {
    event.preventDefault()
  }



  render () {
    return (
      <div className='app-container'>
        <h1>A List of Friends!</h1>
        <FriendsList friends={this.state.friends} />
        <AddFriend onInput={this.onInput} addAFriend={this.addAFriend} />
      </div>
    )
  }
}

export default App;
