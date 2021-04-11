import { Avatar } from '@material-ui/core';
import React from 'react';
import './ListeDiscussion.css';

function ListeDiscussion() {
    return (
        <div className="ListeDiscussion">
            <Avatar />
            <div className="ListeDiscussion__info">
                <h2>Amis de Fac</h2>
                <p>Dernier message</p>
            </div>
        </div>
    )
}

export default ListeDiscussion
