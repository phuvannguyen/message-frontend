import React, { Component } from 'react';
import './User.css'

export default class User extends Component {
    render() {
        const {name, profile_pic, status} = this.props.user;
        return <div className="User">
            <img src={profile_pic} alt={name}  className="UserPic"></img>
            <div className='UserDetail'>
                <p className="UserName">{name}</p>
                <p className="UserStatus">{status}</p>
            </div>

        </div>
    }

}