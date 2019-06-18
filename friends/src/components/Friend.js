import React from 'react'

import './FriendsList.css'
import UpdateFriend from './UpdateFriend'
import DeleteFriend from './DeleteFriend'

const Friend = (props) => {
    const friendID = props.friend.id
    console.log(friendID)
    return (
        <div className='friend' key={props.friend.id}>
            <div className='friend-info'>
                <h2>{props.friend.name}</h2>
                <p>age: {props.friend.age}</p>
                <p>email: {props.friend.email}</p>
            </div>

            <div className='friend-buttons'>
                <button >Edit</button>
                <button onClick={event => props.removeFriend(event, friendID)}>Delete</button>
            </div>

            <UpdateFriend friend={props.friend} editFriend={props.editFriend} />
        </div>
    )
}

export default Friend;