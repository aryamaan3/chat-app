import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Chat.css";


function Chat() {
    return (
        <div className='chat'>
            <div className="chat__enTete">
                <Avatar />
                <div className="chat__enTeteInfo">
                    <h3>Nom de discussion</h3>
                </div>
            </div>
        </div>
    )
}

export default Chat
