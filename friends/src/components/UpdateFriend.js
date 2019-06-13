import React, { Component } from 'react'

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: this.props.friend.name,
                age: this.props.friend.age,
                email: this.props.friend.email
            }
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
          friend: {
            [event.target.name]: event.target.value
          }
        })
    }

    submitUpdate = event => {
        event.preventDefault();
        this.props.editFriend(this.state.friend)
    }

    render () {
        return (
            <>
            <form onSubmit={this.submitUpdate} className='edit-form'>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.friend.name}
                    onChange={this.changeHandler} 
                    required />
                <input 
                    type='number'
                    name='age'
                    placeholder='age'
                    value={this.state.friend.age}
                    onChange={this.changeHandler} 
                    required />
                <input 
                    type='email'
                    name='email'
                    placeholder='Samantha'
                    value={this.state.friend.email}
                    onChange={this.changeHandler} 
                    required />
            </form>
            </>
        )
    }
}

export default UpdateFriend