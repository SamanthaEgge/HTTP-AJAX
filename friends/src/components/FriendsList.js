import React, { Component } from 'react'
import axios from 'axios';

import Friend from './Friend'

class FriendsList extends Component {
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

    render() {
        return (
            <>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </>
        )
    }
}

export default FriendsList