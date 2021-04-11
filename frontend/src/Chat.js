import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./Chat.css";
import axios from "./axios"


function Chat({ messages, username }) {

    const [input, setInput] = useState("");

    const envoyer = async (e) => {
        e.preventDefault(); //empeche de rafraichir la page

        axios.post('/message/new', {
            message: input,
            name: username,
            recu: true
        })

        setInput('')
    }



    //https://stackoverflow.com/questions/39523040/concatenating-variables-and-strings-in-react
    //map au lieu de foreach car, foreach peut rien return
    return (
        <div className='chat'>
            <div className="chat__enTete">
                <Avatar />
                <div className="chat__enTeteInfo">
                    <h3>Amis de Fac</h3>
                </div>
            </div>

            <div className="chat__messagesContainer">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === username && "chat__messageEnvoi"}`}>

                        <span className="chat__nom">
                            {message.name}
                        </span>

                        {message.message}
                    </p>
                ))}

            </div>

            <div className="chat__EcrireMessage">
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="Écrivez un message"
                    />
                    <button onClick={envoyer} type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
