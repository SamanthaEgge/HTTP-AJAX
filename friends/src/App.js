import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: null,
      email: '',
    }
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

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,[event.target.name]: event.target.value
      }
    })
  }

  addAFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
      })
      .then(response => {
        console.log('hello, I"m in .then')
        this.setState({
          friends: response.data,
          
          newFriend: {
            name: '',
            age: '',
            email: '',
          }
        })
      })
      .catch(error => {
        console.error('server error', error)
      })
  }

  editFriend = friend => {
    axios
      .put(`http://localhost:50000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({ friends: response.data });
        this.props.history.push('http://localhost:50000/friends')
      })
      .catch(error => console.error('Server Error', error))
  }

  deleteFriend = friendId => {
    console.log(friendId);
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {this.setState({ friends: response.data }) })
      .catch(error => console.error('Server Error', error))
  }

  render () {
    return (
      <div className='app-container'>
        <h1>A List of Friends!</h1>
        <FriendsList friends={this.state.friends} editFriend={this.editFriend} deleteFriend={this.deleteFriend} />
        <AddFriend changeHandler={this.changeHandler} addAFriend={this.addAFriend} newFriend={this.state.newFriend} />
      </div>
    )
  }
}

export default App;
