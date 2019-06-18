import React from 'react'

import Friend from './Friend'

const FriendsList = (props) => {
    return (
        <>
            {props.friends.map(friend => (
                <Friend key={friend.id} friend={friend} editFriend={props.editFriend} removeFriend={props.removeFriend} />
            ))}
        </>
    )
}


export default FriendsList