import React, { Component } from "react";
import User from "../containers/User"
import './Sidebar.css'


export default class Sidebar extends Component {

    render() {
        const { contacts } = this.props;
        return <aside className="Sidebar">
            {contacts.map(contact => <User user={contact} key={contact.user_id}/>)}
        </aside>
    }
}