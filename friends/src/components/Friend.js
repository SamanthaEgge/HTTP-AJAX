import React from 'react'

const Friend = ({ friend }) => {
    const { id, name, age, email } = friend;
    return (
        <div className='friend' key={id}>
            <h2>{name}</h2>
            <p>age: {age}</p>
            <p>email: {email}</p>
        </div>
    )
}

export default Friend;