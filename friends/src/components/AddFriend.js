import React from 'react';

const AddFriend = (props) => {
    const { name, age, email } = props.newFriend
    return (
        <>
            <form className='friend-form' onSubmit={props.addAFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Samantha'
                    value={name}
                    onChange={props.changeHandler} 
                    required />
                <input 
                    type='number'
                    name='age'
                    placeholder='69'
                    value={age}
                    onChange={props.changeHandler} 
                    required />
                <input 
                    type='email'
                    name='email'
                    placeholder='sam.egge@gmail.com'
                    value={email}
                    onChange={props.changeHandler} 
                    required />
                <button className='submit-button'>Make-A-Friend</button>
            </form>
        </>
    )
}


export default AddFriend;