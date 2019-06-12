import React from 'react';

const AddFriend = (props) => {
    return (
        <>
            <form className='friend-form' onSubmit={props.addAFriend}>
                <input 
                    type='text'
                    name='name'
                    placeHolder='Samantha'
                    // value={props.nameInput}
                    onChange={props.onInput} 
                    required />
                <input 
                    type='number'
                    name='age'
                    placeHolder='69'
                    // value={props.ageInput}
                    onChange={props.onInput} 
                    required />
                <input 
                    type='email'
                    name='email'
                    placeHolder='sam.egge@gmail.com'
                    // value={props.emailInput}
                    onChange={props.onInput} 
                    required />
                <button className='submit-button'>Make-A-Friend</button>
            </form>
        </>
    )
}


export default AddFriend;