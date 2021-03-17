import React from 'react'
import './App.css';
import Discussions from './Discussions';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Discussions />
        <Chat />   
      </div>
    </div>
  );
}

export default App;
