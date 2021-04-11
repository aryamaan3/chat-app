import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./Discussions.css";
import ListeDiscussion from './ListeDiscussion.js';

function Discussions({username}) {
    const letter1 = username[0]
    const letter2 = username[1]

    return (
        <div className='discussions'>
            <div className='discussions__enTete'>
                <Avatar>{letter1 + letter2}</Avatar>
                <div className="discussions__enTeteDroite">
                    {username}
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
            </div>
        </div>
    )
}

export default Discussions
