import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./Discussions.css";
import ListeDiscussion from './ListeDiscussion.js';

function Discussions() {
    return (
        <div className='discussions'>
            <div className='discussions__enTete'>
                <Avatar>TR</Avatar>
                <div className="discussions__enTeteDroite">
                    Trae
                </div>
            </div>

            <div className="discussions__search">
                <div className="discussions__searchContainer">
                    <SearchOutlined />
                    <input height="200" size="50" placeholder="Recherchez ou créez une discussion" type="text"/>
                </div>
            </div>

            <div className="discussions__list">
                <ListeDiscussion />
                <ListeDiscussion />
                <ListeDiscussion />
            </div>
        </div>
    )
}

export default Discussions
