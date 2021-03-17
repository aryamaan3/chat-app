import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Chat.css";


function Chat() {
    return (
        <div className='chat'>
            
            <div className="chat__enTete">
                <Avatar />
                <div className="chat__enTeteInfo">
                    <h3>Amis de Fac</h3>
                </div>
            </div>

            <div className="chat__messagesContainer">
                <p className="chat__message">
                    <span className="chat__nom">
                        Ary
                    </span>
                    
                    Salut tout le monde! 
                </p>

                <p className="chat__message chat__messageEnvoi">
                    <span className="chat__nom">
                        Trae
                    </span>
                    
                    Salut, ça va?
                </p>

                <p className="chat__message">
                    <span className="chat__nom">
                        Ary
                    </span>
                    
                    Oui et toi?
                </p>
            </div>

            <div className="chat__EcrireMessage">
                <form>
                    <input 
                        type="text"
                        placeholder = "Écrivez un message"
                    />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
