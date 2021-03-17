import { Avatar } from '@material-ui/core';
import React from 'react';
import './ListeDiscussion.css';

function ListeDiscussion(nom) {
    return (
        <div className="ListeDiscussion">
            <Avatar />
            <div className="ListeDiscussion__info">
                <h2>Nom de discussion</h2>
                <p>Dernier message</p>
            </div>
        </div>
    )
}

export default ListeDiscussion
