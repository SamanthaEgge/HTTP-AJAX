import React, { Component } from 'react'
import axios from 'axios';

class FriendsList extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axios
            .get('localhost:5000/api/friends')
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