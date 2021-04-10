import React, { useState, useEffect } from "react";
import './App.css';
import Discussions from './Discussions';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from "./axios"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Login";

function App() {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("");

  useEffect(() => { 
    axios.get("/message/sync").then(response => {
        setMessages(response.data)
      })
  }, [])//fetch une fois au debut https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once

  useEffect(() => { 
    let url = window.location.href
    setUsername(url.split("?")[1])
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

  /*function setPseudo(){
    let nom;
    let prompt = "Entrez votre pseudo"
    if (!window.sessionStorage) {  // if sessionStorage not supported
      return console.log("unsupported")
    }
    nom = window.sessionStorage.getItem('nom');
    if (!nom) {
        nom = window.prompt(prompt);
        window.sessionStorage.setItem('nom', nom);
    }
    setUsername(nom);
  }*/


  return (
    <div className="App">
      {console.log(username)}
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/logged' >
              <div className='container'>
                <Discussions /> 
                <Chat messages={messages} />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
