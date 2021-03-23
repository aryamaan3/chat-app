import React, { useState, useEffect } from "react";
import './App.css';
import Discussions from './Discussions';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => { //fetch
    axios.get("/message/sync").then(response => {
        setMessages(response.data)
      })
  }, [])

  
  useEffect(() => { //quand page est chargé
    //ecoute sur pusher
    const pusher = new Pusher('0c7f1c2bbfdfc2276821', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (nouvelleMessage) => {
      setMessages([...messages, nouvelleMessage]) //equivalent append
    });

    //on enleve les listener car la dans le cas 
    //d'un nouveau message alert est appelé plusieurs fois
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)


  return (
    <div className="App">
      <div className='container'>
        <Discussions />
        <Chat messages={messages}/>   
      </div>
    </div>
  );
}

export default App;
